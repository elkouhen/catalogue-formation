FROM ubuntu 

RUN apt-get install curl apache2 -y
RUN a2enmod proxy proxy_http

ADD conf/000-default.conf /etc/apache2/sites-enabled/000-default.conf

WORKDIR /app

ADD src/main/webapp /app 

EXPOSE 80 
