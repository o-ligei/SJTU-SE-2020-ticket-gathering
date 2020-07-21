package com.oligei.ticket_gathering.controller;

import com.oligei.ticket_gathering.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Auction")
@CrossOrigin(origins = "*",maxAge = 3600)
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @RequestMapping("/add")
    public boolean addAuction(@RequestParam("actitemid")Integer actitemid,@RequestParam("userid")Integer userid,@RequestParam("ddl")String ddl,
                              @RequestParam("showtime")String showtime,@RequestParam("price")Integer price,@RequestParam("amount")Integer amount)
    {
        return auctionService.save(actitemid,userid,ddl,showtime,price,amount);
    }
}
