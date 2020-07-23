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
import java.util.LinkedList;
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

    @RequestMapping("/delete")
    public Boolean delete(@RequestParam(name = "activityId") String activityid) {
        Integer activityId=Integer.parseInt(activityid);
        System.out.println("delete:"+activityId);
        return activityService.delete(activityId);
    }

    @RequestMapping("/RecommendOnContent")
    public List<ActivitySortpage> recommendOnContent(@RequestParam(name = "userId") Integer userId,
                                                     @RequestParam(name = "activityId") Integer activityId) {
        return activityService.recommendOnContent(userId, activityId);
    }

    @RequestMapping("/FindActivityByCategory")
//    @RequestBody CategoryQuery categoryQuery
    public List<ActivitySortpage> findActivityByCategory(@RequestParam(name = "type")String type,
                                                         @RequestParam(name = "name")String name,
                                                         @RequestParam(name = "city")String city){
        CategoryQuery categoryQuery=new CategoryQuery(type,name);
        System.out.println(categoryQuery.getName());
        System.out.println(categoryQuery.getType());
        System.out.println("city:"+city);
//        List<ActivitySortpage> activitySortpages=new LinkedList<>();
//        activitySortpages.add(activityService.findActivityAndActitem(5));
//        return activitySortpages;
        return activityService.findActivityByCategory(categoryQuery,city);
    }

    @RequestMapping("/FindActivityByCategoryHome")
//    @RequestBody CategoryQuery categoryQuery
    public List<ActivitySortpage> findActivityByCategoryHome(){
        System.out.println();
        return activityService.findActivityByCategoryHome();
    }
}
