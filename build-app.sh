#!/bin/bash

gulp clean
gulp build
rm dist/githop.js
cp -r client/assets dist/
cp client/favicon.ico dist/
gulp manifest