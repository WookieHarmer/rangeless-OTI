# Golang

### Installation
Use go get to install the Go generated code:
```
go get raven.black/dlvc-api
```

### Protobuf & Twirp Generation
The go code was generated using the protoc compiler and the official 
Twirp generator. The code can be regenerated locally with the following command:
```
protoc \
    -I="." \
    --go_out="." \
    --twirp_out="." \
    ./dlvc_api/*.proto
```
Additional information about generating protobufs for go can be found 
in the [Golang Protobuf Docs](https://developers.google.com/protocol-buffers/docs/reference/go-generated).

### Go Mod & Vendored Code
The DLVC API go code uses `go mod` to manage dependencies. 
The go dependencies are vendored into the repo and can be utilized in go
commands like in the following examples:
```
go build -mod=vendor ./...
go test -mod=vendor ./...
```

### Integration Tests
Within the repo, we have a basic integration test for the generated
go code that each pull request must pass before merging. If you have
Docker installed, the test can be run locally with `make test-go` 
from the command line.