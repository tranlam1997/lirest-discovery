#!/bin/bash

# Check if the config folder already exists in the dist folder
if [ ! -d "dist/config" ]; then
  # Copy the config folder to the dist folder
  cp -r config dist/config
fi

if [ ! -f "dist/src/common/swagger/swagger-ui-custom.css" ]; then
  cp src/common/swagger/swagger-ui-custom.css dist/common/swagger/swagger-ui-custom.css
fi