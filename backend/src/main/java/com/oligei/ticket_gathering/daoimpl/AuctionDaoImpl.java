package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.AuctionDao;
import com.oligei.ticket_gathering.entity.mysql.Auction;
import com.oligei.ticket_gathering.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AuctionDaoImpl implements AuctionDao {

    @Autowired
    private AuctionRepository auctionRepository;

    @Override
    public Boolean save(Auction auction) {
        auctionRepository.save(auction);

        return true;
    }
}
