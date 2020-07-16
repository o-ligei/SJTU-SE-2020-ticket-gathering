package com.oligei.ticket_gathering.controller;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.service.ActivityService;
import com.oligei.ticket_gathering.util.CategoryQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Activity")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @RequestMapping("/FindActivityByCategory")
    public List<Activity> findActivityByCategory(@RequestBody CategoryQuery categoryQuery) {
        return activityService.findActivityByCategory(categoryQuery);
    }
}
