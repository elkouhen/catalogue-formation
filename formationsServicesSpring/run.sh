docker rm services

docker run -v `pwd`/build/libs:/app --name services -p 8081:8080 -i -t elkouhen/formations
