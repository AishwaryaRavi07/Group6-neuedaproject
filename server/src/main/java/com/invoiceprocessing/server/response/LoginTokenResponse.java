package com.invoiceprocessing.server.response;

public class LoginTokenResponse {
    String message;
    Boolean status;
    private String token;
    private long expiresIn;

    public String getToken() { return token; }
    public String getMessage() {
        return message;
    }
    public Boolean getStatus() {
        return status;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public void setStatus(Boolean status) {
        this.status = status;
    }
    public void setToken(String token) { this.token = token; }

    public LoginTokenResponse(String message, Boolean status, String token, long expiresIn) {
        this.message = message;
        this.status = status;
        this.token = token;
        this.expiresIn = expiresIn;
    }
}