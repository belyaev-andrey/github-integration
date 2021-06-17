package com.company.githubintegration.repository;

import com.company.githubintegration.entity.GitRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@GraphQLApi
@FeignClient(name="GitHubClient", configuration = GitHubConfiguration.class, url = GitHubConfiguration.BASE_URL)
public interface GitHubRepository {

    @GraphQLQuery
    @GetMapping(path = "/orgs/{org}/repos")
    List<GitRepository> getRepos(@PathVariable("org") String organization);

    @GraphQLMutation
    @DeleteMapping(path = "/repos/{owner}/{repo}")
    GitRepository deleteRepo(@PathVariable("owner") String owner, @PathVariable("repo") String repo);

}