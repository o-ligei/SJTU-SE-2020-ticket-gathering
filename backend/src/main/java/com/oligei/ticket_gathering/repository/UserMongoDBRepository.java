package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mongodb.UserMongoDB;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoDBRepository extends MongoRepository<UserMongoDB,Integer> {
}
