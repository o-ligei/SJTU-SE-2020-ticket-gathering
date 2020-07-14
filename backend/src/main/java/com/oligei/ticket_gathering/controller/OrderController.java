package com.oligei.ticket_gathering.controller;

import com.oligei.ticket_gathering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Order")
@CrossOrigin(origins = "*",maxAge = 3600)
public class OrderController {

    @Autowired
    private OrderService orderService;

}
