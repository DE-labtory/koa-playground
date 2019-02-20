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
	"github.com/tidwall/buntdb"
)

func Deploy(c echo.Context, db *buntdb.DB) error {
	var request bindings.DeployRequest

	if err := c.Bind(&request); err != nil {
		return echo.ErrBadRequest
	}

	request.DateTime = time.Now().String()

	address := KeyGenerate(request.RawByteCode)

	Save(address, request.RawByteCode, db)

	log.Debug(request)

	return c.JSON(http.StatusOK, &renderings.DeployResponse{
		Address: address,
	})
}
