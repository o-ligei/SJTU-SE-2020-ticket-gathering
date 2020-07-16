package com.oligei.ticket_gathering.daoimpl;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.entity.mongodb.ActivityMongoDB;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.repository.ActivityMongoDBRepository;
import com.oligei.ticket_gathering.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ActivityDaoImpl implements ActivityDao {

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private ActivityMongoDBRepository activityMongoDBRepository;


    @Override
    public Activity findOneById(Integer id) {
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
    public List<Activity> findAllByTitleOrVenueOrActor(String title, String venue, String actor) {
        return activityRepository.findAllByTitleLikeOrVenueLikeOrActorLike(title, venue, actor);
    }

}
