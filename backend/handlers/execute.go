/*
 * Copyright 2018 De-labtory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package handlers

import (
	"encoding/hex"
	"errors"
	"math"
	"net/http"
	"strconv"
	"time"

	"github.com/DE-labtory/koa"
	"github.com/DE-labtory/koa/abi"
	"github.com/DE-labtory/leveldb-wrapper"

	"github.com/DE-labtory/koa-playground/backend/bindings"
	"github.com/DE-labtory/koa-playground/backend/renderings"
	"github.com/labstack/echo"
)

func Execute(c echo.Context, db *leveldbwrapper.DBHandle) error {
	var request bindings.ExecuteRequest

	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	addr, err := hex.DecodeString(request.Address)
	if err != nil {
		return err
	}

	val, err := db.Get(addr)
	if err != nil {
		return err
	}

	fnSel := abi.Selector(request.FunctionSignature)
	params, err := encodeParams(request.Params)
	if err != nil {
		return err
	}

	result, err := koa.Execute(val, fnSel, params)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, &renderings.ExecuteResponse{
		EncodedOutput: hex.EncodeToString(result),
		Cost:          int(math.MaxUint64 >> 1),
		ExecutionTime: int(time.Now().Unix()),
	})
}

func encodeParams(params []bindings.Param) ([]byte, error) {
	ps := make([]interface{}, len(params))
	for i, p := range params {
		switch p.Type {
		case "int":
			val, err := strconv.Atoi(p.Value)
			if err != nil {
				return nil, err
			}
			ps[i] = val
		case "bool":
			val, err := strconv.ParseBool(p.Value)
			if err != nil {
				return nil, err
			}
			ps[i] = val
		case "string":
			ps[i] = p.Value
		default:
			return nil, errors.New("unexpected param type, abort")
		}
	}

	result, err := abi.Encode(ps...)
	if err != nil {
		return nil, err
	}

	return result, nil
}
