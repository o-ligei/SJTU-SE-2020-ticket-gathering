package com.oligei.ticket_gathering.daoimpl;

import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.entity.mongodb.ActivityMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.entity.neo4j.ActivityNeo4j;
import com.oligei.ticket_gathering.repository.ActivityMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActivityNeo4jRepository;
import com.oligei.ticket_gathering.repository.ActivityRepository;
import com.oligei.ticket_gathering.util.CategoryQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public class ActivityDaoImpl implements ActivityDao {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private ActivityMongoDBRepository activityMongoDBRepository;

    @Autowired
    private ActivityNeo4jRepository activityNeo4jRepository;

    @Override
    public Activity findOneById(Integer id) {
//        Activity activity = activityRepository.getOne(id);
//        Optional<ActivityMongoDB> activityMongoDB = activityMongoDBRepository.findById(id);
//        if(activityMongoDB.isPresent()){
//            activity.setDescription(activityMongoDB.get().getDescription());
//        }
//        return activity;
        Activity activity;
        try {
            activity = activityRepository.getOne(id);
            Optional<ActivityMongoDB> activityMongoDB = activityMongoDBRepository.findById(id);
            if (activityMongoDB.isPresent()) {
                activity.setDescription(activityMongoDB.get().getDescription());
            }
            return activity;
        } catch (javax.persistence.EntityNotFoundException e) {
            System.out.println("Wrong activityId!");
            return null;
        }
    }

    @Override
    public List<Integer> findActivityByCategory(String name) {
        List<ActivityNeo4j> activityNeo4js = activityNeo4jRepository.findActivityByCategory(name);
        List<Integer> activities = new ArrayList<Integer>();
        for (Object activityNeo4j: activityNeo4js) {
            ActivityNeo4j now_activityNeo4j = (ActivityNeo4j) activityNeo4j;
            activities.add(Integer.valueOf(now_activityNeo4j.getActivityId()));
        }
        return activities;
    }

    @Override
    public List<Integer> findActivityBySubcategory(String name) {
        Collection<ActivityNeo4j> activityNeo4js = activityNeo4jRepository.findActivityBySubcategory(name);
        List<Integer> activities = new ArrayList<Integer>();
        for (Object activityNeo4j: activityNeo4js) {
            ActivityNeo4j now_activityNeo4j = (ActivityNeo4j) activityNeo4j;
            activities.add(Integer.valueOf(now_activityNeo4j.getActivityId()));
        }
        return activities;
    }

    @Override
    public Activity add(String title, String actor, String timescale, String venue, String activityicon) {
        Activity activity=new Activity(null,title,actor,timescale,venue,activityicon);
        return activityRepository.save(activity);
    }

    @Override
    public List<Activity> findAllByTitleOrVenueOrActor(String title, String venue, String actor) {
        return activityRepository.findAllByTitleLikeOrVenueLikeOrActorLike(title, venue, actor);
    }
}
