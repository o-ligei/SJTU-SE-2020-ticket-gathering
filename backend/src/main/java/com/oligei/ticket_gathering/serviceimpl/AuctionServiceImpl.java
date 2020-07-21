package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.AuctionDao;
import com.oligei.ticket_gathering.entity.mysql.Auction;
import com.oligei.ticket_gathering.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class AuctionServiceImpl implements AuctionService {

    @Autowired
    private AuctionDao auctionDao;

    @Override
    public Boolean save(Integer actitemid,Integer userid, String ddl,String showtime, Integer price, Integer amount) {
        Auction auction = new Auction();

        DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date Showtime = null,Ddl = null;
        try{
            Showtime=format1.parse(showtime);
            Ddl=format2.parse(ddl);
        } catch (ParseException e){
            e.printStackTrace();
        }
        auction.setActitemid(actitemid);
        auction.setUserid(userid);
        auction.setIsover(0);
        auction.setPrice(price);
        auction.setDdl(Showtime);
        auction.setShowtime(Ddl);
        auction.setOrdertime(null);
        auction.setAmount(amount);
        return auctionDao.save(auction);
    }
}
