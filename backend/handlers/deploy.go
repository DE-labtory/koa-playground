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
	"github.com/DE-labtory/koa-playground/backend/bindings"
	"time"
	"net/http"
	"github.com/labstack/gommon/log"
	"github.com/DE-labtory/koa-playground/backend/renderings"
)

var rawByteCode = "00000001"

// TODO Of course, this code is a joke! and in fact the code to be implemented must return the address to which it will run.
var address = "NAVER GREEN FACTORY, 6, Buljeong-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea"

func Deploy(c echo.Context) error {

	// TODO When the compiler is finished, we're going to implement all comments below!
	// request := c.Param("deployRequest")
	request := &bindings.DeployRequest{
		RawByteCode: rawByteCode,
		DateTime:    time.Now().String(),
	}

	log.Debug(request)

	response := &renderings.DeployResponse{
		Address: address,
	}

	return c.JSON(http.StatusOK, response)
}
