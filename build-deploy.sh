#!/bin/bash

gulp clean
gulp build
rm dist/githop.js
cp -r client/assets dist/
rm dist/assets/materialdesignicons.css
cp client/favicon.ico dist/
gulp manifest
rm -rf ../../ruby/blg_api_digitalocean/public/*
cp -r dist/* ../../ruby/blg_api_digitalocean/public/