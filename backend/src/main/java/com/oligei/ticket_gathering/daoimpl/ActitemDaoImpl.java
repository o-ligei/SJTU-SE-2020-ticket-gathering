package com.oligei.ticket_gathering.daoimpl;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.repository.ActitemMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActitemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class ActitemDaoImpl implements ActitemDao {

    @Autowired
    private ActitemRepository actitemRepository;

    @Autowired
    private ActitemMongoDBRepository actitemMongoDBRepository;

    @Override
    public Actitem findOneById(Integer id) {
        Actitem actitem = actitemRepository.getOne(id);
        ActitemMongoDB actitemMongoDB = actitemMongoDBRepository.findByActitemId(id);
        actitem.setPrice(actitemMongoDB.getPrice());
        return actitem;
    }
}
