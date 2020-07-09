/**
 * @ClassName User
 * @Description User Service
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.service;

import com.oligei.ticket_gathering.entity.mysql.User;

public interface UserService {
    User login(String name, String password);
}
