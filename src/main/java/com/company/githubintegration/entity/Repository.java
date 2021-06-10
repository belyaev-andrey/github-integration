package com.company.githubintegration.entity;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.JmixId;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;

@JmixEntity
public class Repository {

    @JmixGeneratedValue
    @JmixId
    private Long id;

    @InstanceName
    private String name;

    private Long stargazersCount;

    private UserInfo owner;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getStargazersCount() {
        return stargazersCount;
    }

    public void setStargazersCount(Long stargazersCount) {
        this.stargazersCount = stargazersCount;
    }

    public UserInfo getOwner() {
        return owner;
    }

    public void setOwner(UserInfo owner) {
        this.owner = owner;
    }
}