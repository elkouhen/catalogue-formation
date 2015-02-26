package com.softeam.formations.resources.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Created by elkouhen on 16/01/15.
 */
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Formation {

	String id; 
	
    String categorie;

    String titre;
    
    Date date; 
}
