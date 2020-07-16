package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@Transactional
@SpringBootTest
class ActivityDaoTest {

    @Autowired
    ActivityDao activityDao;

    @Test
    @Rollback
    void findOneById() {
        Activity activity = new Activity(1,"name","actors","showtime","venue","verticalPic");
        activity.setDescription(null);
        assertEquals(activity.getActivityId(),activityDao.findOneById(1).getActivityId());
    }
}