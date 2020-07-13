/**
 * @ClassName User
 * @Description User Entity for Mysql
 * @Author ziliuziliu
 * @Date 2020/7/9
 */

package com.oligei.ticket_gathering.entity.mysql;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "TG_USERS")
public class User {
    private Integer userId;
    private String username;
    private String gender;
    private String email;
    private String phone;
    private String password;
    private String type;

    @Id
    @Column(name = "USER_ID")
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    public Integer getUserId() {return userId;}
    public void setUserId(Integer userId) {this.userId=userId;}

    @Column(name = "USERNAME")
    public String getUsername() {return username;}
    public void setUsername(String username) {this.username=username;}

    @Column(name = "GENDER")
    public String getGender() {return gender;}
    public void setGender(String gender) {this.gender=gender;}

    @Column(name = "EMAIL")
    public String getEmail() {return email;}
    public void setEmail(String email) {this.email=email;}

    @Column(name = "PHONE")
    public String getPhone() {return phone;}
    public void setPhone(String phone) {this.phone=phone;}

    @Column(name = "PASSWORD")
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password=password;}

    @Column(name = "TYPE")
    public String getType() {return type;}
    public void setType(String type) {this.type=type;}

    private String personIcon;
    @Transient
    public String getPersonIcon() {return personIcon;}
    public void setPersonIcon(String personIcon) {this.personIcon=personIcon;}
}
