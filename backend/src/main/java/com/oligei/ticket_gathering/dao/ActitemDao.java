package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Actitem;

public interface ActitemDao {
    Actitem findOneById(Integer id);
}
