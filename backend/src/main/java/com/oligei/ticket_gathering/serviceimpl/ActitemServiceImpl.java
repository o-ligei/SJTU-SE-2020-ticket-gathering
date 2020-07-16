package com.oligei.ticket_gathering.serviceimpl;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.service.ActitemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActitemServiceImpl implements ActitemService {

    @Autowired
    private ActitemDao actitemDao;

    @Autowired
    private ActivityDao activityDao;

    @Override
    public JSONObject findActivityAndActitemDetail(Integer id) {
        Actitem actitem = actitemDao.findOneById(id);
        Activity activity = activityDao.findOneById(actitem.getActivityId());
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("key",actitem.getActivityId());
        jsonObject.put("title",activity.getTitle());
        jsonObject.put("actor",activity.getActor());
        jsonObject.put("timescale",activity.getTimescale());
        jsonObject.put("venue",activity.getVenue());
        jsonObject.put("activityicon",activity.getActivityIcon());
        jsonObject.put("description",activity.getDescription());
        jsonObject.put("website",actitem.getWebsite());
        jsonObject.put("prices",actitem.getPrice());
        return jsonObject;
    }
}
