FROM ubuntu
MAINTAINER elkouhen <mehdi.elkouhen@gmail.com> 

RUN apt-get install curl -y 
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install nodejs -y 

VOLUME /app 
WORKDIR /app

#ADD build/libs/formations-0.1.0.jar /app/formations.jar 

EXPOSE 3000

# Set your default behavior
ENTRYPOINT ["bin/www"]
