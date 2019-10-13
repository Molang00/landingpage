#!/bin/bash
echo stop docker image..
docker stop landing
docker rm landing

echo start the building docker image.. 
docker build -t cherrybox-landing .

echo start the docker image.
docker run -d -p 3000:3000 --name landing cherrybox-landing
