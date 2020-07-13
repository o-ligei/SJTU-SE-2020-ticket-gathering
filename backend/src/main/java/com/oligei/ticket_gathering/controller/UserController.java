/**
 * @ClassName User
 * @Description User Controller
 * @Author ziliuziliu
 * @Date 2020/7/10
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
    public User login(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password) {
        User new_user = userService.login(username, password);
        System.out.println(new_user);
        return new_user;
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @RequestMapping("/Register")
    public boolean register(@RequestBody User user) {
        return userService.register(user);
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @RequestMapping("/ExistsByUsername")
    public boolean existsByUsername(@RequestParam(name = "username") String username) {
        return userService.existsByUsername(username);
    }
}
