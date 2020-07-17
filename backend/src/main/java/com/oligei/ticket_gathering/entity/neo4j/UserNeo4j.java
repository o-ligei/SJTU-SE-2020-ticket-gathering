/**
 * @ClassName UserNeo4j
 * @Description User Entity for Neo4j
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.entity.neo4j;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity(label = "user")
public class UserNeo4j {

    @Id
    @GeneratedValue
    private Long id;

    public UserNeo4j() {}

    public Long getId() {return id;}
    public void setId(Long id) {this.id=id;}
}
