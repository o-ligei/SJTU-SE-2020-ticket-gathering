package com.oligei.ticket_gathering.dao;

public interface VisitedRelationshipDao {
    void saveVisitedHistory(Integer userId, Integer activityId);
}
