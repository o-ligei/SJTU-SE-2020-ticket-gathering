package com.oligei.ticket_gathering.service;

import com.oligei.ticket_gathering.dto.ActivitySortpage;

import java.util.List;

public interface ActivityService {
    List<ActivitySortpage> selectSearch(String type,String name,String city);
    List<ActivitySortpage> findActivityByCategoryHome();
    List<ActivitySortpage> search(String value);
    ActivitySortpage findActivityAndActitem(Integer id);
    Boolean add(String activity);
    Boolean delete(Integer activityId);
    List<ActivitySortpage> recommendOnContent(Integer userId, Integer activityId);
}
