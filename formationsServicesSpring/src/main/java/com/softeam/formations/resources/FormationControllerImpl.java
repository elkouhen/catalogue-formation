package com.softeam.formations.resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.softeam.formations.resources.dto.Formation;

@RestController
public class FormationControllerImpl {

	@RequestMapping("/formations")
	@PreAuthorize("#oauth2.clientHasRole('ROLE_USER')")
	public Collection<Formation> index(
			@RequestParam(value = "categorie", required = false) String category) {

		List<Formation> liste = Arrays
				.asList(Formation.builder().id("1")
						.titre("Programmation orientée objet en Java")
						.categorie("tech-java-ee").build(),
						Formation
								.builder()
								.id("2")
								.titre("Découvrir les méthodes Agiles avec XP et Scrum")
								.categorie("methodes-agiles").date(new Date()).build(),
						Formation.builder().id("3")
								.titre("Développement HTML / JavaScript")
								.categorie("tech-web").date(new Date()).build());
		return filter(liste, category);
	}

	private Collection<Formation> filter(List<Formation> formations,
			String category) {

		if (category == null || category.equals("")) {
			return formations;
		}
		Collection<Formation> result = new ArrayList<Formation>();

		for (Formation formation : formations) {
			if (formation.getCategorie().equals(category)) {
				result.add(formation);
			}
		}
		return result;
	}
}
