package com.oligei.ticket_gathering.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.repository.ActitemMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActitemRepository;
import com.oligei.ticket_gathering.repository.ActivityRepository;
import com.oligei.ticket_gathering.service.ActivityService;
import org.apdplat.word.segmentation.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Activity")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ActivityController {

    @Autowired
    private ActivityService activityService;



    @RequestMapping("/search")
    public List<JSONObject> search(@RequestParam(name = "search") String value){
        System.out.println("value:"+value);
        return activityService.search(value);
    }

}
