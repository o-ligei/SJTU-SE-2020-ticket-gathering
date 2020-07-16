package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Actitem;

import java.util.List;

public interface ActitemDao {
    Actitem findOneById(Integer id);
    List<Actitem> findAllByActivityId(Integer id);
}
