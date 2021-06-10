package com.company.githubintegration.screen.reposlist;

import com.company.githubintegration.entity.GitRepository;
import com.company.githubintegration.repository.GitHubRepository;
import io.jmix.core.LoadContext;
import io.jmix.ui.component.Button;
import io.jmix.ui.model.CollectionLoader;
import io.jmix.ui.navigation.Route;
import io.jmix.ui.screen.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.inject.Inject;
import java.util.List;

@UiController("ReposList")
@UiDescriptor("repos-list.xml")
@Route("repositories")
public class ReposList extends Screen {

    @Inject
    private GitHubRepository gitHubRepository;

    @Autowired
    private CollectionLoader<GitRepository> repositoriesDl;

    @Subscribe("doBtn")
    public void onDoBtnClick(Button.ClickEvent event) {
        repositoriesDl.load();
    }

    @Install(to = "repositoriesDl", target = Target.DATA_LOADER)
    private List<GitRepository> repositoriesDlLoadDelegate(LoadContext<GitRepository> loadContext) {
        final List<GitRepository> repos = gitHubRepository.getRepos("Haulmont");
        return repos;
    }



}