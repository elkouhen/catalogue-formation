package formations.softeam.com.formationsihmandroid.services;

import org.androidannotations.annotations.rest.Get;
import org.androidannotations.annotations.rest.Rest;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;

import java.util.Collection;

@Rest(rootUrl = "http://elkouhen-softeam-E6540:3000/formations", converters = {MappingJacksonHttpMessageConverter.class})
public interface FormationResource {

    // OK
    @Get("")
    Collection<Formation> findAll();
}