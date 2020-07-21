package com.oligei.ticket_gathering.service;

public interface AuctionService {
    Boolean save(Integer actitemid,Integer userid, String ddl,String showtime, Integer price,Integer amount);
}
