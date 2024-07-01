package com.invoiceprocessing.server.dto;

public class UserIdDTO {
    private String userId;

    public UserIdDTO() {
    }

    public UserIdDTO(String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}