package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.service.ActitemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActitemServiceImpl implements ActitemService {

    @Autowired
    private ActitemDao actitemDao;
}
