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

package main

import (
	"github.com/DE-labtory/koa-playground/backend/middlewares"

	"github.com/DE-labtory/koa-playground/backend/handlers"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/DE-labtory/koa-playground/backend/config"
)

func main() {
	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	db := config.InitDB()

	// Routes
	e.GET("/", handlers.Ping)

	e.POST("/compile", handlers.Compile)
	e.POST("/deploy", func(c echo.Context) error {
		return handlers.Deploy(c, &db)
	})
	e.POST("/execute", func(c echo.Context) error {
		return handlers.Execute(c, &db)
	})

	// log 테스트
	middlewares.Info("%d %s logging ", 1, "INFO")
	middlewares.Warnning("%d %s logging", 2, "WARNNING")
	middlewares.Error("%d %s logging", 3, "ERROR")

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
