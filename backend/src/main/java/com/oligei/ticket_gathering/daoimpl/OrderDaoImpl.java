package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.OrderDao;
import com.oligei.ticket_gathering.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    private OrderRepository orderRepository;
}
