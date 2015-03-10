package formations.softeam.com.formationsihmandroid;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import org.androidannotations.annotations.AfterInject;
import org.androidannotations.annotations.Background;
import org.androidannotations.annotations.EBean;
import org.androidannotations.annotations.RootContext;
import org.androidannotations.annotations.rest.RestService;

import java.util.List;

import formations.softeam.com.formationsihmandroid.services.Formation;
import formations.softeam.com.formationsihmandroid.services.FormationResource;

@EBean
public class FormationListAdapter extends BaseAdapter {

    List<Formation> formations;

    @RestService
    FormationResource formationResource;

    @RootContext
    Context context;

    @Background
    void initAdapter() {
        formations = formationResource.findAll();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        FormationItemView FormationItemView;
        if (convertView == null) {
            FormationItemView = FormationItemView_.build(context);
        } else {
            FormationItemView = (FormationItemView) convertView;
        }

        FormationItemView.bind(getItem(position));

        return FormationItemView;

    }

    @Override
    public int getCount() {
        return formations.size();
    }

    @Override
    public Formation getItem(int position) {
        return formations.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }
}
