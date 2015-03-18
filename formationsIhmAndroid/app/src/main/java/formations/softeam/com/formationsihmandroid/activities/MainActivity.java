package formations.softeam.com.formationsihmandroid.activities;

import android.support.v4.app.FragmentManager;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;

import org.androidannotations.annotations.AfterViews;
import org.androidannotations.annotations.EActivity;
import org.androidannotations.annotations.FragmentById;
import org.androidannotations.annotations.ViewById;

import formations.softeam.com.formationsihmandroid.R;
import formations.softeam.com.formationsihmandroid.fragments.FormationListFragment_;
import formations.softeam.com.formationsihmandroid.fragments.NavigationDrawerFragment;

@EActivity(R.layout.activity_main)
public class MainActivity extends ActionBarActivity
        implements NavigationDrawerFragment.NavigationDrawerCallbacks {

    @FragmentById(R.id.navigation_drawer)
    NavigationDrawerFragment mNavigationDrawerFragment;

    @ViewById(R.id.drawer_layout)
    DrawerLayout drawer;

    private int category;

    private String mTitle;


    @AfterViews
    public void afterView() {
        mNavigationDrawerFragment.setUp(R.id.navigation_drawer, drawer);
    }

    @Override
    public void onNavigationDrawerItemSelected(int position) {
        // update the main content by replacing fragments
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction()
                .replace(R.id.container, FormationListFragment_.newInstance(position + 1))
                .commit();
    }

    public void onSectionAttached(int number) {

        category = number;

        switch (number) {
            case 1:
                mTitle = getString(R.string.tech_dev_javaee);
                break;
            case 2:
                mTitle = getString(R.string.tech_dev_web);
                break;
            case 3:
                mTitle = getString(R.string.methodes_agiles);
                break;
            default:
                mTitle = "undefined";
        }

    }

    public void restoreActionBar() {
        ActionBar actionBar = getSupportActionBar();
        actionBar.setDisplayShowTitleEnabled(true);
        actionBar.setTitle(mTitle);
    }

    public int getCategory() {
        return category;
    }
}
