# C++

### Protobuf Generation
The c++ code was generated using the protoc compiler. 
The code can be regenerated locally with the following command:
```
protoc \
    -I="." \
    --cpp_out="." \
    ./dlvc_api/*.proto
```
Additional information about generating protobufs for c++ can be found 
in the [C++ Protobuf Docs](https://developers.google.com/protocol-buffers/docs/reference/cpp-generated).

### Twirp Generation
Unfortunately a twirp generator does not yet exist for c++. We are
working on creating one.

In the meantime, as demonstrated by the 
[curl example](https://github.com/ravenops/dlvc-api/tree/docs#example) 
on repo's main page, any language's basic http client is capable of 
communicating with the DLVC API. 

We recommend using the generated protobuf messages with a c++ http client.

### Integration Tests
Within the repo, for several languages we have a basic integration tests
for the generated code that each pull request must pass before merging. 
We plan to add integration tests for the generated c++ code soon. 

If you have Docker installed, the tests can be run locally with 
`make test` from the command line.