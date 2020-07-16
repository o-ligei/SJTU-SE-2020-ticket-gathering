package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.util.CategoryQuery;

import java.util.List;

public interface ActivityDao {
    Activity findOneById(Integer id);
    List<Activity> findActivityByCategory(String name);
    List<Activity> findActivityBySubcategory(String name);
}
