package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.persistence.criteria.CriteriaBuilder;

public interface ActitemMongoDBRepository extends MongoRepository<ActitemMongoDB,Integer> {

    ActitemMongoDB findActitemMongoDBByActitemId(Integer id);
    ActitemMongoDB findByActitemId(Integer id);
}
