package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuctionRepository extends JpaRepository<Auction,Integer> {

    List<Auction> findAuctionsByIsoverEquals(Integer isover);
}
