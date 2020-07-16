package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Order;

import java.util.List;

public interface OrderDao {
    List<Order> getOrderByUserId(int userId);

}
