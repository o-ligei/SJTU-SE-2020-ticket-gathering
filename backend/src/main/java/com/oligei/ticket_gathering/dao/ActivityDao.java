package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.util.CategoryQuery;

import java.util.List;

public interface ActivityDao {
    Activity findOneById(Integer id);
    List<Activity> findAllByTitleOrVenueOrActor(String title,String venue,String actor);
    List<Integer> findActivityByCategory(String name);
    List<Integer> findActivityBySubcategory(String name);
    Activity add(String title,String actor,String timescale,String venue,String activityicon);
    Boolean delete(Integer activityId);
    List<Activity> findAllByTitleOrVenue(String title,String venue);
}
