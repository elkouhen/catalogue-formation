package formations.softeam.com.formationsihmandroid;

import android.content.Context;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.androidannotations.annotations.EViewGroup;
import org.androidannotations.annotations.ViewById;

import formations.softeam.com.formationsihmandroid.services.Formation;

@EViewGroup(R.layout.formation_item)
public class FormationItemView extends LinearLayout {

    @ViewById
    TextView titreView;

    @ViewById
    TextView categoryView;

    public FormationItemView(Context context) {
        super(context);
    }

    public void bind(Formation person) {
        titreView.setText(person.getTitre());
        categoryView.setText(person.getCategorie());
    }
}
