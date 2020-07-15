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
        User user = userRepository.checkUser(username);
        if (user != null && encoder.matches(password, user.getPassword())){
            Integer userId = user.getUserId();
            UserMongoDB user_mongodb = userMongoDBRepository.findByUserId(userId);
            if (user_mongodb != null && user_mongodb.getPersonIcon() != null)
                user.setPersonIcon(user_mongodb.getPersonIcon());
            return user;
        }
        return null;
    }

    @Override
    public boolean register(User user) {
        String personIcon = user.getPersonIcon();
        user.setPersonIcon("");
        String rawPassword = user.getPassword();
        user.setPassword(encoder.encode(rawPassword));
        User saved_user = userRepository.save(user);
        int userId = saved_user.getUserId();
        UserMongoDB userMongoDB = new UserMongoDB(userId, personIcon);
        userMongoDBRepository.save(userMongoDB);
        return true;
    }

    @Override
    public boolean existsByUsername(String username) {
        User user = userRepository.findUserByUsername(username);
        return user != null;
    }
}
