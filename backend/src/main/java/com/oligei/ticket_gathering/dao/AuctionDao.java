package com.oligei.ticket_gathering.dao;

import com.oligei.ticket_gathering.entity.mysql.Auction;

import java.util.List;

public interface AuctionDao {

    Boolean save(Auction auction);

    List<Auction> getAvailableAuctions();

    Auction findOneById(Integer auctionid);
}
