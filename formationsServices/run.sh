docker rm services

docker run -v `pwd`:/app --name services -p 8081:3000 -i -t elkouhen/formations
