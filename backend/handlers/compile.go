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
	"github.com/DE-labtory/koa-playground/backend/renderings"
	"github.com/DE-labtory/koa/abi"
	"github.com/labstack/gommon/log"
)

var helloWorld = `contract {
    func hello() string{
        return "hello world!"
    }
}`

func Compile(c echo.Context) error {

	// TODO When the compiler is finished, we're going to implement all comments below!
	// request := c.Param("CompileRequest")

	request := &bindings.CompileRequest{
		Code: helloWorld,
	}

	log.Debug(request)

	// byteCodes, err :=  something.Compile(request.Code)
	byteCodes := []byte(request.Code)

	// TODO I used some random value that can use to create a value to return.
	response := &renderings.CompileResponse{
		ABI:         abi.ABI{},
		RawByteCode: byteCodes,
		ASM:         []string{request.Code},
	}

	return c.JSON(http.StatusOK, response)
}