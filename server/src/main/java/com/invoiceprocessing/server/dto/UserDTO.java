package com.invoiceprocessing.server.dto;

public class UserDTO {
    private int userid;
    private String name;
    private String username;
    private String email;
    private String password;
    private String gender;
    public UserDTO() {
    }
    public UserDTO(int userid, String name, String username, String email, String password, String gender) {
        this.userid = userid;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public int getUserid() {
        return userid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setName(String name) {
        this.name = name;
    }
}