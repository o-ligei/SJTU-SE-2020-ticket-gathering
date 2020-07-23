package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.User;

import java.util.List;

public interface ActivityDao {
    Activity findOneById(Integer id);
    List<Activity> findAllByTitleOrVenueOrActor(String title,String venue,String actor);
    List<Integer> findActivityByCategoryAndCity(String type,String name, String city);
    Activity add(String title,String actor,String timescale,String venue,String activityicon);
    Boolean delete(Integer activityId);
    List<Integer> recommendOnContent(Integer userId, Integer activityId);
}
