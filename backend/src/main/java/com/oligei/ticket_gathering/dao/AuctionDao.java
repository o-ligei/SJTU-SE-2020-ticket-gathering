package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Auction;

public interface AuctionDao {

    Boolean save(Auction auction);
}
