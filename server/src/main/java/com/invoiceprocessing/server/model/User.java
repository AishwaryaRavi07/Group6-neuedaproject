//package com.invoiceprocessing.server.model;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name="user")
//public class User {
//    @Id
//    @Column(name = "user_id", length = 45)
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private int userid;
//    @Column(name = "user_name", length = 255)
//    private String username;
//    @Column(name = "email", length = 255)
//    private String email;
//    @Column(name = "password", length = 255)
//    private String password;
//
//    public User() {
//    }
//
//    public User(int userid, String username, String email, String password) {
//        this.userid = userid;
//        this.username = username;
//        this.email = email;
//        this.password = password;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public int getUserid() {
//        return userid;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public void setUserid(int userid) {
//        this.userid = userid;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//}
////create getters and setters