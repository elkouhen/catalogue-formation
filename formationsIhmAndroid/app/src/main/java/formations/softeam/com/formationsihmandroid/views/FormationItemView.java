package formations.softeam.com.formationsihmandroid.views;

import android.content.Context;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.androidannotations.annotations.EViewGroup;
import org.androidannotations.annotations.ViewById;

import formations.softeam.com.formationsihmandroid.R;
import formations.softeam.com.formationsihmandroid.services.dto.Formation;

@EViewGroup(R.layout.formation_item)
public class FormationItemView extends LinearLayout {

    @ViewById
    TextView titreView;

    @ViewById
    TextView categoryView;

    @ViewById
    TextView dureeView;

    public FormationItemView(Context context) {
        super(context);
    }

    public void bind(Formation person) {
        titreView.setText(person.getTitre());
        categoryView.setText(person.getCategorie());
        dureeView.setText(person.getDuree());
    }
}
