package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.repository.ActivityMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ActivityDaoImpl implements ActivityDao {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private ActivityMongoDBRepository activityMongoDBRepository;

}
