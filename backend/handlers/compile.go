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
	"net/http"

	"github.com/DE-labtory/koa"
	"github.com/DE-labtory/koa-playground/backend/bindings"
	"github.com/DE-labtory/koa-playground/backend/renderings"
	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
)

func Compile(c echo.Context) error {
	request := &bindings.CompileRequest{}
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	asm, ab, err := koa.Compile(request.Code)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	log.Debug(request)

	response := &renderings.CompileResponse{
		ABI:         ab,
		RawByteCode: asm.ToRawByteCode(),
		ASM:         asm.String(),
	}

	return c.JSON(http.StatusOK, response)
}
