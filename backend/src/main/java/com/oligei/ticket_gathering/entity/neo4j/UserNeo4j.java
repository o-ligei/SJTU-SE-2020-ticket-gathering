/**
 * @ClassName User
 * @Description User Entity for Neo4j
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.entity.neo4j;

import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
public class UserNeo4j {
    @Id
    private Integer userId;

    public UserNeo4j() {}
    public UserNeo4j(Integer userId) {this.userId=userId;}

    public Integer getUserId() {return userId;}
}
