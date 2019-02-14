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
)

func Execute(c echo.Context) error {

	//request := c.Param("ExecuteRequest")
	request := &bindings.ExecuteRequest{
		Address:          address,
		FunctionSelector: "I LIKE GOLANG!",
		Params:           []bindings.Param{},
	}

	log.Debug(request)

	decodedOutput := &renderings.DecodedOutput{Type: "type", Value: "value",}

	log.Debug(decodedOutput)

	response := &renderings.ExecuteResponse{
		EncodedOutput: "encodedOutput",
		DecodedOutput: *decodedOutput,
		Cost:          int(math.MaxUint64 >> 1),
		ExecutionTime: int(time.Now().Unix()),
	}

	return c.JSON(http.StatusOK, response)
}
