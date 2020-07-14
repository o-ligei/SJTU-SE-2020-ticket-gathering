package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Activity;

public interface ActivityDao {
    Activity findOneById(Integer id);
}
