package formations.softeam.com.formationsihmandroid.views;

import android.content.Context;
import android.content.SharedPreferences;
import android.widget.CheckBox;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.androidannotations.annotations.Click;
import org.androidannotations.annotations.EViewGroup;
import org.androidannotations.annotations.ViewById;

import formations.softeam.com.formationsihmandroid.R;
import formations.softeam.com.formationsihmandroid.services.dto.Formation;

@EViewGroup(R.layout.formation_item)
public class FormationItemView extends LinearLayout {

    Formation person;

    @ViewById(R.id.titre)
    TextView titreView;

    @ViewById(R.id.category)
    TextView categoryView;

    @ViewById(R.id.duree)
    TextView dureeView;

    @ViewById(R.id.select)
    CheckBox select;


    public FormationItemView(Context context) {
        super(context);
    }

    public void bind(Formation person) {
        this.person = person;

        titreView.setText(person.getTitre());
        categoryView.setText(person.getCategorie());
        dureeView.setText(person.getDuree());

        SharedPreferences sharedPreferences = this.getContext().getSharedPreferences("formation_prefs", Context.MODE_PRIVATE);

        final boolean selected = sharedPreferences.getBoolean(person.getId(), false);
        person.setSelected(selected);
        select.setChecked(person.isSelected());
    }

    @Click(R.id.select)
    void select() {

        SharedPreferences sharedPreferences = this.getContext().getSharedPreferences("formation_prefs", Context.MODE_PRIVATE);
        final SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putBoolean(this.person.getId(), !sharedPreferences.getBoolean(person.getId(), false));
        editor.commit();

        final boolean selected = sharedPreferences.getBoolean(person.getId(), false);
        person.setSelected(selected);
        select.setChecked(person.isSelected());
    }

}
