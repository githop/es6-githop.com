#!/bin/bash

gulp clean
gulp build
rm dist/githop.js
cp -r client/assets dist/
gulp manifest