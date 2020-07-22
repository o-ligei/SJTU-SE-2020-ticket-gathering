package com.oligei.ticket_gathering.serviceimpl;

import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.dao.AuctionDao;
import com.oligei.ticket_gathering.dto.AuctionListItem;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.Auction;
import com.oligei.ticket_gathering.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AuctionServiceImpl implements AuctionService {

    @Autowired
    private AuctionDao auctionDao;

    @Autowired
    private ActitemDao actitemDao;

    @Autowired
    private ActivityDao activityDao;

    @Override
    public Boolean save(Integer actitemid, String ddl,String showtime, Integer price, Integer amount) {
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
        auction.setUserid(0);
        auction.setIsover(0);
        auction.setPrice(price);
        auction.setDdl(Ddl);
        auction.setShowtime(Showtime);
        auction.setOrdertime(null);
        auction.setAmount(amount);
        return auctionDao.save(auction);
    }

    @Override
    public List<AuctionListItem> getAvailableAuctions() {
        List<Auction> auctions = auctionDao.getAvailableAuctions();
        List<AuctionListItem> auctionListItems = new ArrayList<>();
        DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for(Auction auction : auctions)
        {
            System.out.println("another one"+auction.getActitemid());
            Activity activity = activityDao.findOneById(actitemDao.findOneById(auction.getActitemid()).getActivityId());
            AuctionListItem auctionListItem = new AuctionListItem(auction.getAuctionid(),auction.getDdl(),auction.getPrice(),auction.getShowtime(),auction.getAmount(),
                    activity.getTitle(),activity.getActor(),activity.getVenue(),activity.getActivityIcon());
            System.out.println(auctionListItem.getAuctionid());
            auctionListItems.add(auctionListItem);
        }
        return auctionListItems;
    }

    @Override
    public Integer joinAuction(Integer auctionid, Integer userid, Integer price) {
        Auction auction = auctionDao.findOneById(auctionid);

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateNow = df.format(new Date());
        Date d1 = null,d2 = null;
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
            auctionDao.save(auction);
            return -1;
        }

        auction.setUserid(userid);
        auction.setPrice(price);
        auction.setOrdertime(new Date());
        auctionDao.save(auction);
        return 1;
    }
}
