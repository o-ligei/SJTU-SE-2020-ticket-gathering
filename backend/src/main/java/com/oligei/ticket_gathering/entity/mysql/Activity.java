package com.oligei.ticket_gathering.entity.mysql;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "TG_ACTIVITIES")
public class Activity {
    private Integer activityId;
    private String title;
    private String actor;
    private String timescale;
    private String venue;

    @Id
    @Column(name = "ACTIVITY_ID")
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment",strategy = "increment")
    public Integer getActivityId(){return activityId;}
    public void setActivityId(Integer activityId){this.activityId = activityId;}

    @Column(name = "TITLE")
    public String getTitle(){return title;}
    public void setTitle(String title){this.title = title;}

    @Column(name = "ACTOR")
    public String getActor(){return actor;}
    public void setActor(String actor){this.actor = actor;}

    @Column(name = "TIMESCALE")
    public String getTimescale(){return timescale;}
    public void setTimescale(String timescale){this.timescale = timescale;}

    @Column(name = "VENUE")
    public String getVenue(){return venue;}
    public void setVenue(String venue){this.venue=venue;}
}
