#!/bin/bash

gulp clean
gulp build
rm dist/githop.js
cp -r client/assets dist/
rm dist/assets/materialdesignicons.css
cp client/favicon.ico dist/
gulp manifest
rm -rf ../../blg_api_digitalocean/public/*
cp -r dist/* ../../blg_api_digitalocean/public/