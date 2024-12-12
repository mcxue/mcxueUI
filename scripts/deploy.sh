#!/bin/bash
ssh fish "mkdir -p ~/apps/mcxueUI"
scp -r dist/ fish:~/apps/mcxueUI/
scp Dockerfile docker-compose.yml nginx.conf fish:~/apps/mcxueUI/

ssh fish "
cd ~/apps/mcxueUI &&
docker-compose down &&
docker-compose up --build -d
"
