package formations.softeam.com.formationsihmandroid.services;

import org.androidannotations.annotations.rest.Get;
import org.androidannotations.annotations.rest.Rest;
import org.androidannotations.api.rest.RestClientErrorHandling;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;

import java.util.List;

import formations.softeam.com.formationsihmandroid.services.dto.Formation;

@Rest(rootUrl = "http://192.168.1.88:3000/formations", converters = {MappingJacksonHttpMessageConverter.class})
public interface FormationResource extends RestClientErrorHandling {

    @Get("/?categorie={category}")
    List<Formation> findAll(String category);
}