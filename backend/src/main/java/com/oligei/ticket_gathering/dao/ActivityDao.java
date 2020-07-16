package com.oligei.ticket_gathering.dao;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mysql.Activity;

import java.util.List;

public interface ActivityDao {
    Activity findOneById(Integer id);
    List<Activity> findAllByTitleOrVenueOrActor(String title,String venue,String actor);
}
