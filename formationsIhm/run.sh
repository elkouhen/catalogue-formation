#!/bin/bash 

docker rm ihm 

docker run --name ihm -v `pwd`/src/main/webapp:/app -p 8080:80 --link services:services  -t elkouhen/formations-ihm /usr/sbin/apache2ctl -D FOREGROUND
