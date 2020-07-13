package com.oligei.ticket_gathering.controller;

import com.oligei.ticket_gathering.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Activity")
@CrossOrigin(origins = "*",maxAge = 3600)
public class ActivityController {

    @Autowired
    private ActivityService activityService;
}
