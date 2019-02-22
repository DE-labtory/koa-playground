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
	"net/http"
	"time"

	"github.com/DE-labtory/leveldb-wrapper"

	"github.com/DE-labtory/koa-playground/backend/bindings"
	"github.com/DE-labtory/koa-playground/backend/renderings"
	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
)

func Deploy(c echo.Context, db *leveldbwrapper.DBHandle) error {
	var request bindings.DeployRequest

	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	request.DateTime = time.Now().String()

	address, err := hex.DecodeString(KeyGenerate(request.RawByteCode))
	if err != nil {
		return err
	}

	rawByteCode, err := hex.DecodeString(request.RawByteCode)
	if err != nil {
		return err
	}

	err = db.Put(address, rawByteCode, true)
	if err != nil {
		return err
	}

	log.Debug(request)

	return c.JSON(http.StatusOK, &renderings.DeployResponse{
		Address: hex.EncodeToString(address),
	})
}
