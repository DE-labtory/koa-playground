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
	"github.com/labstack/echo"
	"net/http"
	"github.com/DE-labtory/koa-playground/backend/bindings"
	"github.com/labstack/gommon/log"
	"github.com/DE-labtory/koa-playground/backend/renderings"
	"math"
	"time"
	"github.com/tidwall/buntdb"
	"fmt"
)
func Execute(c echo.Context, db *buntdb.DB) error {
	var request bindings.ExecuteRequest

	if err := c.Bind(&request); err != nil {
		return echo.ErrBadRequest
	}

	codes, err := FindCodesByKey(request.Address, db)
	if err != nil {
		return echo.ErrBadRequest
	}

	fmt.Println("Execute with : ",codes)

	decodedOutput := &renderings.DecodedOutput{Type: "type", Value: "value",}

	return c.JSON(http.StatusOK, &renderings.ExecuteResponse{
		EncodedOutput: "encodedOutput",
		DecodedOutput: *decodedOutput,
		Cost:          int(math.MaxUint64 >> 1),
		ExecutionTime: int(time.Now().Unix()),
	})
}
