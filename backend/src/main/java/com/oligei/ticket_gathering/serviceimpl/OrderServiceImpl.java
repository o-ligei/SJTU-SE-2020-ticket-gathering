package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.OrderDao;
import com.oligei.ticket_gathering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;
}
