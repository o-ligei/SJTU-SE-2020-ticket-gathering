package com.oligei.ticket_gathering.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dto.ActivitySortpage;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.service.ActivityService;
import com.oligei.ticket_gathering.util.CategoryQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/Activity")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ActivityController {

    @Autowired
    private ActivityService activityService;


    @RequestMapping("/search")
    public List<ActivitySortpage> search(@RequestParam(name = "search") String value) {
        System.out.println("value:" + value);
        return activityService.search(value);
    }

    @RequestMapping("/add")
    public Boolean add(@RequestParam(name = "activity") String activity) {
        return activityService.add(activity);
    }


    @RequestMapping("/FindActivityByCategory")
    public List<ActivitySortpage> findActivityByCategory(@RequestBody CategoryQuery categoryQuery) {
        return activityService.findActivityByCategory(categoryQuery);
    }
}
