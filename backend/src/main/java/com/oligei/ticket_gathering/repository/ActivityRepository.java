package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity,Integer> {
}
