package com.oligei.ticket_gathering.dao;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ActivityDaoTest {

    
    @Autowired
    private ActivityDao activityDao;


    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    @Transactional
    @Rollback
    void findOneById() {
        System.out.println("Correct ActivityId");
        assertEquals(activityDao.findOneById(1).getActivityId(),1);
        assertEquals(activityDao.findOneById(100).getActivityId(),100);
        assertEquals(activityDao.findOneById(1000).getActivityId(),1000);
    }

    @Test
    @Transactional
    @Rollback
    void findAllByTitleOrVenueOrActor() {
        System.out.println("Reasonable Value");
        String searchvalue1 = "%上海%";
        assertTrue(activityDao.findAllByTitleOrVenueOrActor(searchvalue1, searchvalue1, searchvalue1).size()>0);
        String searchvalue2 = "%周杰伦%";
        assertTrue(activityDao.findAllByTitleOrVenueOrActor(searchvalue2, searchvalue2, searchvalue2).size()>0);
        System.out.println("Unreasonable Value");
        String searchvalue3 = "%螺蛳粉%";
        assertEquals(0, activityDao.findAllByTitleOrVenueOrActor(searchvalue3, searchvalue3, searchvalue3).size());
        System.out.println("Reasonable and Unreasonable");
        assertTrue(activityDao.findAllByTitleOrVenueOrActor(searchvalue1, searchvalue2, searchvalue3).size()>0);
        assertTrue(activityDao.findAllByTitleOrVenueOrActor(searchvalue1, searchvalue3, searchvalue3).size()>0);
    }
}