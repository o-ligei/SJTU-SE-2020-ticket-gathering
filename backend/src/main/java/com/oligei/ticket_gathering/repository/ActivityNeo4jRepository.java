/**
 * @ClassName ActivityNeo4jRepository
 * @Description ActivityNeo4j Repository
 * @Author ziliuziliu
 * @Date 2020/7/16
 */

package com.oligei.ticket_gathering.repository;

import com.oligei.ticket_gathering.entity.neo4j.ActivityNeo4j;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityNeo4jRepository extends Neo4jRepository<ActivityNeo4j,Long> {

    @Query("MATCH (sub:subcategory)-[:INCLUDES]->(activities) WHERE sub.name={name} RETURN activities")
    List<ActivityNeo4j> findActivityBySubcategory(@Param("name") String name);

    @Query("match (cate:category)-[:CONTAINS]->(:subcategory)-[:INCLUDES]->(activities) where cate.name={name} return activities")
    List<ActivityNeo4j> findActivityByCategory(@Param("name") String name);
}
