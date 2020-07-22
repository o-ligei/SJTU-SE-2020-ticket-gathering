package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.neo4j.VisitedRelationship;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface VisitedRelationshipRepository extends Neo4jRepository<VisitedRelationship,Long> {
}
