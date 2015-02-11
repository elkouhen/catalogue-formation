FROM ubuntu 
MAINTAINER mehdi el kouhen <mehdi.elkouhen@gmail.com> 

RUN apt-get install curl apache2 -y
RUN a2enmod proxy proxy_http

ADD conf/000-default.conf /etc/apache2/sites-enabled/000-default.conf

VOLUME /app 
WORKDIR /app

EXPOSE 80 

CMD /usr/sbin/apache2ctl -D FOREGROUND