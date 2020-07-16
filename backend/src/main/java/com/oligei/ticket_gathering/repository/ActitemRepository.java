package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Actitem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActitemRepository extends JpaRepository<Actitem,Integer> {
}
