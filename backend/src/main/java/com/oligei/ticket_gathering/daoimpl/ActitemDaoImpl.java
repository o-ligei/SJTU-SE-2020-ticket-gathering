package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.repository.ActitemMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActitemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ActitemDaoImpl implements ActitemDao {

    @Autowired
    private ActitemRepository actitemRepository;

    @Autowired
    private ActitemMongoDBRepository actitemMongoDBRepository;
}
