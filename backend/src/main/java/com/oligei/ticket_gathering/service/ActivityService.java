package com.oligei.ticket_gathering.service;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.util.CategoryQuery;

import java.util.List;

public interface ActivityService {
    List<Activity> findActivityByCategory(CategoryQuery categoryQuery);
    List<JSONObject> search(String value);
    JSONObject findActivityAndActitem(Integer id);
}
