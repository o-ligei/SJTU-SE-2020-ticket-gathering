package com.oligei.ticket_gathering.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.dao.OrderDao;
import com.oligei.ticket_gathering.entity.info.OrderInfo;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.mysql.Order;
import com.oligei.ticket_gathering.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private ActitemDao actitemDao;

    @Autowired
    private ActivityDao activityDao;

    @Override
    public List<OrderInfo> getOrderInfoByUser(int userId){
        List<OrderInfo> orderInfos=new ArrayList<>();
        List<Order> orderList=orderDao.getOrderByUserId(userId);
        for (Order orderItem : orderList){
            Actitem tmp_actItem=actitemDao.findOneById(orderItem.getActitemId());
            Activity tmp_activity=activityDao.findOneById(tmp_actItem.getActivityId());
            OrderInfo tmp=new OrderInfo(orderItem,tmp_activity);
            orderInfos.add(tmp);
        }
        return orderInfos;
    }

    @Override
    public boolean addOrder(int userId, int actitemId, int price, int amount, String showtime, String orderTime){
        Actitem actitem=actitemDao.findOneById(actitemId);
        List<JSONObject> prices=actitem.getPrice();

        int i,j,num=0;
        for (i=0;i<prices.size();i++){
            if (Objects.equals(showtime, prices.get(i).getString("time"))){
                break;
            }
        }
        JSONObject tmp=prices.get(i);
        JSONArray tickets=tmp.getJSONArray("class");
        for (j=0;j<tickets.size();j++){
            JSONObject ticket=tickets.getJSONObject(j);
//            System.out.println(ticket.getString("price"));
            if(Objects.equals(price,Integer.parseInt(ticket.getString("price")))){
                num=Integer.parseInt(ticket.getString("num"));
                if(Objects.equals(0,num)){
                    System.out.println("the num is zero");
                    return false;
                }
                else{
                    num=num-2;
                    ticket.put("num",num);
                    tickets.set(j,ticket);
//                    System.out.println(j);
                    break;
                }
            }
        }
        tmp.put("class",tickets);
        prices.set(i,tmp);

//        System.out.println(prices);

        actitemDao.deleteMongoDBByActitemId(actitemId);
        actitemDao.insertActitemInMongo(actitemId,prices);

        DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        DateFormat format2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date Showtime=null,OrderTime=null;
        try{
            Showtime=format1.parse(showtime);
            OrderTime=format2.parse(orderTime);
        } catch (ParseException e){
            e.printStackTrace();
        }

        return orderDao.addOrder(userId,actitemId,price,amount,Showtime,OrderTime);
    }

}
