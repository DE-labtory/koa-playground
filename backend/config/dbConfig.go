package config

import (
	"github.com/DE-labtory/leveldb-wrapper"
)

func InitDB() *leveldbwrapper.DBHandle {
	path := "./data.db"
	provider := leveldbwrapper.CreateNewDBProvider(path)
	return provider.GetDBHandle("contracts")
}
