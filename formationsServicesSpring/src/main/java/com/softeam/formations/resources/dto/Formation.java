package com.softeam.formations.resources.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.Builder;

/**
 * Created by elkouhen on 16/01/15.
 */
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Formation {

    String categorie;

    String titre;
}
