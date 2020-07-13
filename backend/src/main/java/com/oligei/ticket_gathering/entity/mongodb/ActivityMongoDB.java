package com.oligei.ticket_gathering.entity.mongodb;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.Id;

@Document(collection = "tg_activity")
public class ActivityMongoDB {
    @Id
    @Field("activityid")
    private Integer activityId;

    @Field("activityicon")
    private String activityIcon;

    @Field("description")
    private String description;

    public ActivityMongoDB(Integer activityId,String activityIcon,String description){
        this.activityId = activityId;
        this.activityIcon = activityIcon;
        this.description = description;
    }

    public Integer getActivityId(){return activityId;}
    public void setActivityId(Integer activityId){this.activityIcon = activityIcon;}

    public String getActivityIcon(){return activityIcon;}
    public void setActivityIcon(String activityIcon){this.activityIcon = activityIcon;}

    public String getDescription(){return description;}
    public void setDescription(String description){this.description = description;}
}
