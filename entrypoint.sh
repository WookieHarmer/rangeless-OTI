#!/bin/bash
set -e

# install the repo python package to allow imports across packages
pip3 install -qqq -e /github/workspace/pkgs/rvnpy/

exec "$@"
