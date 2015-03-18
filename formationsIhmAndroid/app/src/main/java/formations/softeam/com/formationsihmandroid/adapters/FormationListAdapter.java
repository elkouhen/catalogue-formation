package formations.softeam.com.formationsihmandroid.adapters;

import android.app.Activity;
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

import formations.softeam.com.formationsihmandroid.activities.MainActivity;
import formations.softeam.com.formationsihmandroid.helpers.CategoryConverter;
import formations.softeam.com.formationsihmandroid.services.FormationResource;
import formations.softeam.com.formationsihmandroid.services.dto.Formation;
import formations.softeam.com.formationsihmandroid.views.FormationItemView;
import formations.softeam.com.formationsihmandroid.views.FormationItemView_;

@EBean
public class FormationListAdapter extends BaseAdapter {

    List<Formation> formations = new ArrayList<>();

    @RestService
    FormationResource formationResource;

    @RootContext
    Context context;

    @RootContext
    Activity activity;

    @Background
    void search() {

        if (activity instanceof MainActivity) {
            MainActivity mainActivity = (MainActivity) activity;

            int categorie = mainActivity.getCategory();

            formations = formationResource.findAll(new CategoryConverter().converterToLabel(categorie));

            resetView();
        }
    }

    @AfterViews
    void initAdapter() {
        search();
    }

    @UiThread
    void resetView() {
        notifyDataSetInvalidated();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        FormationItemView formationItemView;
        if (convertView == null) {
            formationItemView = FormationItemView_.build(context);
        } else {
            formationItemView = (formations.softeam.com.formationsihmandroid.views.FormationItemView) convertView;
        }

        formationItemView.bind(getItem(position));

        return formationItemView;
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
