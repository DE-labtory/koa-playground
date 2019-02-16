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

/*
	info, warning, error, debug
*/

package middlewares

import (
	"fmt"
	"log"

	"github.com/fatih/color"
)

// Info is INFO level log method
func Info(format string, params ...interface{}) {
	str := getConvertStr("INFO", format, params...)
	log.Println(str)
}

// Warnning is WARNNING level log method
func Warnning(format string, params ...interface{}) {
	yellow := color.New(color.FgYellow).SprintFunc()

	str := getConvertStr("WARNNING", format, params...)
	log.Println(yellow(str))
}

// Error is ERROR level log method
func Error(format string, params ...interface{}) {
	red := color.New(color.FgRed).SprintFunc()

	str := getConvertStr("ERROR", format, params...)
	log.Println(red(str))
}

// getConvertStr method is convert formatted string to noraml string
func getConvertStr(level string, format string, params ...interface{}) string {
	formattedStr := fmt.Sprintf(format, params...)
	return fmt.Sprintf("%s : %s", level, formattedStr)
}
