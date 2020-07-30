package com.oligei.ticket_gathering.config;

import com.oligei.ticket_gathering.interceptor.AuthenInterceptor;
import com.oligei.ticket_gathering.interceptor.AuthorInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        List<String> excludePath = new ArrayList<>();
        excludePath.add("/User/Register");
        excludePath.add("/User/Login");
        excludePath.add("/User/ExistsByUsername");
        excludePath.add("/Activity/search");
//        excludePath.add("/Activity/search1");
//        excludePath.add("/Activity/search2");
        excludePath.add("/Activity/FindActivityByCategory");
        excludePath.add("/index.html");
        excludePath.add("/Activity/FindActivityByCategoryHome");
        excludePath.add("/hi");
        excludePath.add("/");
        excludePath.add("/Activity/initActivity");
        excludePath.add("/Activity/test");
        excludePath.add("/Activity/clear");
        //excludePath.add("/Actitem/detail");
        registry.addInterceptor(new AuthenInterceptor()).addPathPatterns("/**")
                                                        .excludePathPatterns(excludePath);
        registry.addInterceptor(new AuthorInterceptor()).addPathPatterns("/Activity/add")
                                                        .addPathPatterns("/Activity/delete");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .allowedMethods("GET", "POST", "DELETE", "PUT","PATCH")
                .maxAge(3600);
    }
}
