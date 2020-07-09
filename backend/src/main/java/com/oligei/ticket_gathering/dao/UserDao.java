/**
 * @ClassName User
 * @Description User Dao
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.User;

public interface UserDao {
    User login(String name, String password);
}
