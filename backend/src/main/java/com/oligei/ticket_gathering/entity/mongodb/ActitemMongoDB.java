package com.oligei.ticket_gathering.entity.mongodb;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document(collection = "tg_actitem")
public class ActitemMongoDB {
    @Id
    @Field("actitemid")
    private Integer actitemId;

    @Field("prices")
    private JSONObject price;
    public JSONObject getPrice() {return price;}
    public void setPrice(JSONObject price){this.price = price;}

    public ActitemMongoDB(Integer actitemId,JSONObject price){
        this.actitemId = actitemId;
        this.price = price;
    }

    public Integer getActitemId(){return actitemId;}
    public void setActitemId(Integer actitemId){this.actitemId = actitemId;}


}
