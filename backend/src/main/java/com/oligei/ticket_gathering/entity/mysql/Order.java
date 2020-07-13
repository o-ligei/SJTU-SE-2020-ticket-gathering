package com.oligei.ticket_gathering.entity.mysql;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "TG_ORDERS")
public class Order {
    private Integer orderId;
    private Integer userId;
    private Integer actitemId;
    private Integer price;
    private Integer amount;

    @Id
    @Column(name = "ORDERID")
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public Integer getOrderId(){return orderId;}
    public void setOrderId(Integer orderId){this.orderId = orderId;}

    @Column(name = "USERID")
    public Integer getUserId(){return userId;}
    public void setUserId(Integer userId){this.userId = userId;}

    @Column(name = "ACTITEMID")
    public Integer getActitemId(){return actitemId;}
    public void setActitemId(Integer actitemId){this.actitemId =actitemId;}

    @Column(name = "PRICE")
    public Integer getPrice(){return price;}
    public void setPrice(Integer price){this.price = price;}
}
