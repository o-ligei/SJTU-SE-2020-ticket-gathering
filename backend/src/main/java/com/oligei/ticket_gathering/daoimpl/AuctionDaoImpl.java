package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.AuctionDao;
import com.oligei.ticket_gathering.entity.mysql.Auction;
import com.oligei.ticket_gathering.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class AuctionDaoImpl implements AuctionDao {

    @Autowired
    private AuctionRepository auctionRepository;

    @Override
    public Boolean save(Auction auction) {
        auctionRepository.save(auction);

        return true;
    }

    @Override
    public List<Auction> getAvailableAuctions() {
        List<Auction> auctions = auctionRepository.findAuctionsByIsoverEquals(0);
        List<Auction> result = new ArrayList<>();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateNow = df.format(new Date());
        Date d1 = null,d2 = null;
        for(Auction auction : auctions)
        {
            String dateDdl = auction.getDdl().toString();
            try {
                d1 = df.parse(dateNow);
                d2 = df.parse(dateDdl);
            }catch (Exception e){
                e.printStackTrace();;
            }
            if(d1.getTime()>d2.getTime())
            {
                auction.setIsover(1);
                auctionRepository.save(auction);
            }
            else
                result.add(auction);

        }
        return result;
    }

    @Override
    public Auction findOneById(Integer auctionid) {
        return auctionRepository.getOne(auctionid);
    }
}
