package com.invoiceprocessing.server.response;

public class LoginTokenResponse {
    String message;
    Boolean status;
    private String token;
    int userId;

    public String getToken() { return token; }
    public String getMessage() {
        return message;
    }
    public Boolean getStatus() {
        return status;
    }
    public int getUserId() {
        return userId;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public void setStatus(Boolean status) {
        this.status = status;
    }
    public void setToken(String token) { this.token = token; }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public LoginTokenResponse(String message, Boolean status, String token, int userId) {
        this.message = message;
        this.status = status;
        this.token = token;
        this.userId = userId;
    }

}