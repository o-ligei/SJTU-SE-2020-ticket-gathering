package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
}
