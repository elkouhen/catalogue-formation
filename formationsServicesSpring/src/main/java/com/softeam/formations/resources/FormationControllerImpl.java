package com.softeam.formations.resources;


import com.softeam.formations.resources.dto.Formation;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.Collection;

@RestController
public class FormationControllerImpl {

    @RequestMapping("/formations")
    public Collection<Formation> index() {


        return Arrays.asList(Formation.builder().titre("Programmation orientée objet en Java").categorie("tech-java-ee").build());
    }
}