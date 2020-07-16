package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query(value = "from Order o where o.userId = :userId")
    List<Order> getOrderByUserId(@Param("userId") Integer userId);
}