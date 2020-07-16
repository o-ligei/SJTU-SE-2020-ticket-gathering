package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.OrderDao;
import com.oligei.ticket_gathering.entity.mysql.Order;
import com.oligei.ticket_gathering.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> getOrderByUserId(int userId){
        return orderRepository.getOrderByUserId(userId);
    }
}
