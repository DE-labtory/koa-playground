package config

import (
	"github.com/labstack/gommon/log"
	"github.com/tidwall/buntdb"
)

func InitDB() buntdb.DB {
	db, err := buntdb.Open(":memory:")
	if err != nil {
		log.Fatal(err)
	}

	return *db
}
