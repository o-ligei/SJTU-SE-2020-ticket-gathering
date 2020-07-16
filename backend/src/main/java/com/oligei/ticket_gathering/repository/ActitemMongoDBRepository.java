package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mongodb.ActitemMongoDB;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActitemMongoDBRepository extends MongoRepository<ActitemMongoDB,Integer> {
    ActitemMongoDB findByActitemId(Integer actitemId);

}
