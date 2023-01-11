#!/usr/bin/env bash

# cd ../mongo && docker-compose up -d &

# The above Docker pull will take over 15 seconds the first time
sleep 2.5 && cd ../node && npm i && node main.js &

sleep 3.5 && cd ../angular && npm i && ng serve -o &

wait