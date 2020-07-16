package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.service.ActivityService;
import com.oligei.ticket_gathering.util.CategoryQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityDao activityDao;

    @Override
    public List<Activity> findActivityByCategory(CategoryQuery categoryQuery) {
        if (categoryQuery.getType().equals("category"))
            return activityDao.findActivityByCategory(categoryQuery.getName());
        else if (categoryQuery.getType().equals("subcategory"))
            return activityDao.findActivityBySubcategory(categoryQuery.getName());
        else return null;
    }
}
