# Typescript

### Protobuf & Twirp Generation
Generation of the typescript code is a little more involved than the 
other languages.

[Protobuf.js](https://github.com/protobufjs/protobuf.js) was used 
to generate the javascript bindings and then create typescript type 
definitions for the bindings. 

[protoc-gen-twirp_typescript](https://github.com/ravenops/protoc-gen-twirp_typescript) is a public
fork of ours that was used to generate the twirp typescript code.

If you need to generate typescript files from the protobufs, please
contact us for assistance.

### Integration Tests
Within the repo, for several languages we have a basic integration tests
for the generated code that each pull request must pass before merging. 
We plan to add integration tests for the generated typescript code soon. 

If you have Docker installed, the tests can be run locally with 
`make test` from the command line.