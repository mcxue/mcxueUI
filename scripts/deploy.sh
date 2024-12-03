scp -r dist/ fish:~/apps/mcxue-ui/
scp Dockerfile docker-compose.yml nginx.conf fish:~/apps/mcxue-ui/

ssh fish "
cd ~/apps/mcxue-ui
docker-compose up --build -d
"
