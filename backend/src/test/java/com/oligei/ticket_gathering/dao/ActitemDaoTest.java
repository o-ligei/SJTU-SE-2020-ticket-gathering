package com.oligei.ticket_gathering.dao;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class ActitemDaoTest {

    @Autowired
    ActitemDao actitemDao;



    @Test
    @Rollback
    void findOneById() {
        List<JSONObject> list = new ArrayList<>();
        JSONObject object = new JSONObject();
        object.put("test","T");
        list.add(object);
        Actitem actitem = new Actitem(2,1,"JuCheng");
        actitem.setPrice(list);
        assertEquals(actitem.getActitemId(),actitemDao.findOneById(2).getActitemId());
        assertEquals(actitem.getActivityId(),actitemDao.findOneById(2).getActivityId());
        assertEquals(actitem.getWebsite(),actitemDao.findOneById(2).getWebsite());
        assertEquals(actitem.getPrice(),actitemDao.findOneById(2).getPrice());
    }
}