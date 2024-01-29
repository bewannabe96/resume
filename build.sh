#!/bin/bash

rm -rf dist
mkdir -p dist

cp -r bootstrap/dist/* dist
cp -r src/public/* dist

npm run compile