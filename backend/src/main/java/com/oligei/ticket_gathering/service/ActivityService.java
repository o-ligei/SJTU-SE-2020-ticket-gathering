package com.oligei.ticket_gathering.service;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.util.CategoryQuery;

import java.util.List;

public interface ActivityService {
    List<Activity> findActivityByCategory(CategoryQuery categoryQuery);
}
