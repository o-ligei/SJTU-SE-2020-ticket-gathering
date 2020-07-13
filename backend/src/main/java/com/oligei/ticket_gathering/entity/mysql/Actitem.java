package com.oligei.ticket_gathering.entity.mysql;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;


@Entity
@Table(name = "TG_ACTITEMS")
public class Actitem {
    private Integer actitemId;
    private Integer activityId;
    private String website;

    @Id
    @Column(name = "ACTITEM_ID")
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public Integer getActitemId(){return actitemId;}
    public void setActitemId(Integer actitemId){this.actitemId = actitemId;}

    @Column(name = "ACTIVITY_ID")
    public Integer getActivityId(){return activityId;}
    public void setActivityId(Integer activityId){this.activityId = activityId;}

    @Column(name = "WEBSITE")
    public String getWebsite(){return website;}
    public void setWebsite(String website){this.website = website;}

}
