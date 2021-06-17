package com.company.githubintegration.repository;

import com.company.githubintegration.entity.GitRepository;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@GraphQLApi
@NoRepositoryBean
@FeignClient(name="GitHubClient", configuration = GitHubConfiguration.class, url = GitHubConfiguration.BASE_URL)
public interface GitHubClient extends Repository<GitRepository, Long> {

    @GraphQLQuery
    @GetMapping(path = "/orgs/{org}/repos")
    List<GitRepository> findByOwnerLogin(@PathVariable("org") String organization);

    @GraphQLMutation
    @DeleteMapping(path = "/repos/{owner}/{repo}")
    void deleteByOwnerAndName(@PathVariable("owner") String owner, @PathVariable("repo") String repo);

}