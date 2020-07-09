/**
 * @ClassName User
 * @Description User Dao Implementation
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.UserDao;
import com.oligei.ticket_gathering.entity.mongodb.UserMongoDB;
import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.repository.UserMongoDBRepository;
import com.oligei.ticket_gathering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMongoDBRepository userMongoDBRepository;

    @Override
    public User login(String name, String password) {
        User user = userRepository.checkUser(name, password);
        if (user != null){
            Integer userId = user.getUserId();
            Optional<UserMongoDB> user_mongodb = userMongoDBRepository.findById(userId);
            user_mongodb.ifPresent(userMongoDB -> user.setPersonIcon(userMongoDB.getPersonIcon()));
        }
        return user;
    }
}
