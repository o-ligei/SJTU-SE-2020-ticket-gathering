package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.mysql.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction,Integer> {
}
