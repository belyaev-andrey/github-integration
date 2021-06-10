package com.company.githubintegration.repository;

import com.company.githubintegration.entity.Repository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@GraphQLApi
@FeignClient(name="GitHubClient", configuration = GitHubConfiguration.class, url = GitHubConfiguration.BASE_URL)
public interface GitHubRepository {

    @GraphQLQuery
    @RequestMapping(method = RequestMethod.GET, path = "/orgs/{org}/repos")
    List<Repository> getRepos(@PathVariable("org") String organization);

    @GraphQLMutation
    @RequestMapping(method = RequestMethod.DELETE, path = "/repos/{owner}/{repo}")
    Repository deleteRepo(@PathVariable("owner") String owner, @PathVariable("repo") String repo);

}