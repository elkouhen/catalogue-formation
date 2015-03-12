package formations.softeam.com.formationsihmandroid.adapters;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import org.androidannotations.annotations.AfterViews;
import org.androidannotations.annotations.Background;
import org.androidannotations.annotations.EBean;
import org.androidannotations.annotations.RootContext;
import org.androidannotations.annotations.UiThread;
import org.androidannotations.annotations.rest.RestService;

import java.util.ArrayList;
import java.util.List;

import formations.softeam.com.formationsihmandroid.services.dto.Formation;
import formations.softeam.com.formationsihmandroid.services.FormationResource;
import formations.softeam.com.formationsihmandroid.views.FormationItemView;
import formations.softeam.com.formationsihmandroid.views.FormationItemView_;

@EBean
public class FormationListAdapter extends BaseAdapter {

    List<Formation> formations = new ArrayList<>();

    @RestService
    FormationResource formationResource;

    @RootContext
    Context context;

    @Background
    void search() {
        formations = formationResource.findAll();
        resetView();
    }

    @AfterViews
    void initAdapter() {
        search();
    }

    @UiThread
    void resetView() {
        notifyDataSetChanged();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        FormationItemView FormationItemView;
        if (convertView == null) {
            FormationItemView = FormationItemView_.build(context);
        } else {
            FormationItemView = (formations.softeam.com.formationsihmandroid.views.FormationItemView) convertView;
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
