package com.invoiceprocessing.server.dto;

public class IdDTO {
    private long id;

    public IdDTO() {
    }

    public IdDTO(long id) {
        this.id = id;
    }
    public long getId() { return id; }

    public void setId(long id) {
        this.id = id;
    }
}