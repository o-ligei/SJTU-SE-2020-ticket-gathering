/**
 * @ClassName User
 * @Description User Dao
 * @Author ziliuziliu
 * @Date 2020/7/10
 */

package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.User;

public interface UserDao {
    User login(String username, String password);
    boolean register(User user);
    boolean existsByUsername(String username);
}
