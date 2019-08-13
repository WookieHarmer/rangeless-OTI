# Java

### Protobuf Generation
The java code was generated using the protoc compiler. 
The code can be regenerated locally with the following command:
```
protoc \
    -I="." \
    --java_out="." \
    ./dlvc_api/*.proto
```
Additional information about generating protobufs for java can be found 
in the [Java Protobuf Docs](https://developers.google.com/protocol-buffers/docs/reference/java-generated).

### Twirp Generation
Unfortunately a twirp generator does not yet exist for java. We are
working on creating one.

In the meantime, as demonstrated by the 
[curl example](https://github.com/ravenops/dlvc-api/tree/docs#example) 
on repo's main page, any language's basic http client is capable of 
communicating with the DLVC API. 

We recommend using the generated protobuf messages with a java http client.

### Integration Tests
Within the repo, we have a basic integration test for the generated
java code that each pull request must pass before merging. If you have
Docker installed, the test can be run locally with `make test-java` 
from the command line.