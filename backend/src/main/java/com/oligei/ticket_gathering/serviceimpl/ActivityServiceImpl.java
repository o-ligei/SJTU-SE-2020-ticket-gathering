package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityDao activityDao;
}
