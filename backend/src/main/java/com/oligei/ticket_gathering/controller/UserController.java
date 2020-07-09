/**
 * @ClassName User
 * @Description User Controller
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.controller;

import com.oligei.ticket_gathering.entity.mysql.User;
import com.oligei.ticket_gathering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/User")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "*", maxAge = 3600)
    @RequestMapping("/Login")
    public User login(@RequestParam(name = "name") String name, @RequestParam(name = "password") String password) {
        return userService.login(name, password);
    }
}
