/**
 * @ClassName User
 * @Description User Dao Implementation
 * @Author ziliuziliu
 * @Date 2020/7/10
 */

package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.UserDao;
import com.oligei.ticket_gathering.entity.mongodb.UserMongoDB;
import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.repository.UserMongoDBRepository;
import com.oligei.ticket_gathering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMongoDBRepository userMongoDBRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public User login(String username, String password) {
        User user = userRepository.checkUser(username, password);
        if (user != null && encoder.matches(password, user.getPassword())){
            Integer userId = user.getUserId();
            Optional<UserMongoDB> user_mongodb = userMongoDBRepository.findById(userId);
            user_mongodb.ifPresent(userMongoDB -> user.setPersonIcon(userMongoDB.getPersonIcon()));
            return user;
        }
        return null;
    }

    @Override
    public boolean register(User user) {
        int userId = user.getUserId();
        String personIcon = user.getPersonIcon();
        UserMongoDB userMongoDB = new UserMongoDB(userId, personIcon);
        user.setPersonIcon("");
        String rawPassword = user.getPassword();
        user.setPassword(encoder.encode(rawPassword));
        userRepository.save(user);
        userMongoDBRepository.save(userMongoDB);
        return true;
    }

    @Override
    public boolean existsByUsername(String username) {
        User user = userRepository.findUserByUsername(username);
        return user != null;
    }
}
