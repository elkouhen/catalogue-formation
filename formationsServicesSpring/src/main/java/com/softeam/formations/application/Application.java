package com.softeam.formations.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@EnableAutoConfiguration
@RestController
@ComponentScan ("com.softeam")
public class Application {

    public static void main(String[] args) {
        ApplicationContext ctx1 = SpringApplication.run(Application.class, args);

    }
}
