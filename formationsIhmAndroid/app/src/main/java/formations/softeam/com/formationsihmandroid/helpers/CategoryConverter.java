package formations.softeam.com.formationsihmandroid.helpers;

/**
 * Created by elkouhen on 15/03/15.
 */
public class CategoryConverter {
    public String converterToLabel(int categorie) {

        String category = null;

        if (categorie == 1) {
            category = "tech-java-ee";
        } else if (categorie == 2) {
            category = "tech-web";
        } else if (categorie == 3) {
            category = "methodes-agiles";
        }
        return category;
    }
}
