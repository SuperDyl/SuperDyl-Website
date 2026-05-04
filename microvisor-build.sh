#!/usr/bin/env bash
set -eou pipefail

pushd "$0"
if [[ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]]; then
    echo "Nothing to pull!" &>1
    exit 1;
fi

git pull
npm i
npm run build

popd
