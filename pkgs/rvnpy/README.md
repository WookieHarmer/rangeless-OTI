# Python

The python package was named `rvnpy` instead of `py` in order to 
avoid an import namespace collision with the `py` library.

### Installation
To install the python pkg within your virtual env so it can be imported 
in your code, we recommend:
```
pip3 install -qqq -e /path_to_repo/pkgs/rvnpy/
```
Alternatively you could use `sys.path.append` and specify the path directly

### Protobuf & Twirp Generation
The python code was generated using the protoc compiler and the official 
Twirp generator for python. The code can be regenerated locally with the following command:
```
protoc \
    -I="." \
    --python_out="." \
    --twirp_python_out="." \
    ./dlvc_api/*.proto
```
Additional information about generating protobufs for python can be found 
in the [Python Protobuf Docs](https://developers.google.com/protocol-buffers/docs/reference/python-generated).

### Integration Tests
Within the repo, we have a basic integration test for the generated
python code that each pull request must pass before merging. If you have
Docker installed, the test can be run locally with `make test-python` 
from the command line.