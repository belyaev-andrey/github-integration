package com.company.githubintegration.repository;


import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GitHubConfiguration {

    public static final String BASE_URL = "https://api.github.com";

    @Bean
    public RequestInterceptor oAuth2FeignRequestInterceptor() {
        return new RequestInterceptor(){
            @Override
            public void apply(RequestTemplate template) {
                template.header("X-Intercepted", "Custom");
            }
        };
    }

}