# koa-playground

koa-playground provides an environment where you can easily test and run the language of your [koa project](https://github.com/DE-labtory/koa).

### Back End

koa-playground uses `HTTP protocol`. It has 3 communications. Also, all data is encoded in UTF-8.

`bindings` package includes HTTP Request. And `renderings` package includes HTTP Response.

#### Compile

`Compiling` reads `source code` and generates `bytecode`. `Bytecode` is a code to execute the program. `URL` to `compile` is `"/compile"`.

```go
type CompileRequest struct {
    Code    string
}
```

`code` is a source code written by the user.

```go
type CompileResponse struct {
    ABI             abi
    RawByteCode     []byte
    ASM             []string
}
```

`ABI` is an interface needed to user for calling the functions. `RawByteCode` is a byte which has information of how to execute the program. And `RawByteCode` consists of hexadecimal code. `AsmCode` is a collection of assemble codes which is more readable to human than bytes. 

#### Deploy

`Deploying` deliveries the bytecode of the contract to blockchain. Users can call the functions only after deploying. `URL` to `deploy` is `"/deploy"`.

```go
type DeployRequest struct {
    RawByteCode string
    DateTime    string
}
```

`RawByteCode` is the code for `deploying` to the blockchain. `DateTime` is time when `RawByteCode` is deployed in the `vm`.

```go
type DeployResponse struct {
    Address string
}
```

`Address` is the address of the contract. User should call the functions with this `address`.

#### Execute

`Executing` is executed by user calling the function with parameters. Then, the response delivers the result of the function call. `URL` to `Execute` is `"/execute"`.

```go
type ExecuteRequest struct {
    Address             string
    FunctionSelector    string
    Params              []Param
}
```

`Address` is an address of the contract which includes the function to call. `FunctionSelector` is the identifer to call a function. `Params` is a collection of parameters of the function to call.

```go
type ExecuteResponse struct {
	EncodedOutput string
	DecodedOutput DecodedOutput
	Cost          int
	ExecutionTime int
}
```

`EncodedOutput` is the not decoded result of function call. For example, if the output is `1`, `EncodedOutput` is `0x00000001`. `DecodedOutput` is the decoded result of function call. In above example, `DecodedOutput` is `integer 1`. `Cost` is the cost to execute the function. `ExecutionTime` is the time when the function was executed.

### License

Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the [LICENSE](LICENSE).
