package com.oligei.ticket_gathering.dao;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Actitem;

import java.util.List;

public interface ActitemDao {
    Actitem findOneById(Integer id);
    List<Actitem> findAllByActivityId(Integer id);
    void deleteMongoDBByActitemId(Integer actitemId);
    ActitemMongoDB insertActitemInMongo(int actitemId,List<JSONObject> price);
    Actitem add(int activityId,String website);
}
