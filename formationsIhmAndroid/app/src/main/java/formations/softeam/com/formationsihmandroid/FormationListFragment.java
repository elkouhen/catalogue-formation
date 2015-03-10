package formations.softeam.com.formationsihmandroid;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.ListFragment;
import android.widget.ListView;

import org.androidannotations.annotations.AfterViews;
import org.androidannotations.annotations.Bean;
import org.androidannotations.annotations.EFragment;
import org.androidannotations.annotations.ViewById;

/**
 * A placeholder fragment containing a simple view.
 */
@EFragment(R.layout.fragment_formation_list)
public class FormationListFragment extends ListFragment {


    /**
     * The fragment argument representing the section number for this
     * fragment.
     */
    private static final String ARG_SECTION_NUMBER = "section_number";

    @ViewById(R.id.listView)
    ListView formationList;

    @Bean
    FormationListAdapter adapter;

    public FormationListFragment() {
    }

    /**
     * Returns a new instance of this fragment for the given section
     * number.
     */
    public static FormationListFragment newInstance(int sectionNumber) {
        FormationListFragment fragment = new FormationListFragment_();
        Bundle args = new Bundle();
        args.putInt(ARG_SECTION_NUMBER, sectionNumber);
        fragment.setArguments(args);
        return fragment;
    }

    @AfterViews
    void bindAdapter() {
        formationList.setAdapter(adapter);
    }

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        ((MainActivity) activity).onSectionAttached(
                getArguments().getInt(ARG_SECTION_NUMBER));
    }
}