package config

import (
	"github.com/tidwall/buntdb"
	"github.com/labstack/gommon/log"
)

func InitDB() buntdb.DB{
	db, err := buntdb.Open(":memory:")
	if err != nil {
		log.Fatal(err)
	}

	return *db
}