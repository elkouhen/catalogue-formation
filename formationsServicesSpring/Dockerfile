FROM dockerfile/java
MAINTAINER elkouhen <mehdi.elkouhen@gmail.com> 

WORKDIR /app

ADD build/libs/formations-0.1.0.jar /app/formations.jar 

EXPOSE 8080 

# Set your default behavior
ENTRYPOINT ["java", "-jar", "formations.jar"]
