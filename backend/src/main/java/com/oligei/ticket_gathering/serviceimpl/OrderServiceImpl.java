package com.oligei.ticket_gathering.serviceimpl;

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

import java.util.ArrayList;
import java.util.List;

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

}
