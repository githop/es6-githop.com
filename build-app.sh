#!/bin/bash

gulp clean
gulp build
cp -r client/assets dist/
cp client/favicon.ico dist/
gulp manifest