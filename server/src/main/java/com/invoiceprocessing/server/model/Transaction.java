package com.invoiceprocessing.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int userId;
    private String name;
    private int amount;
    private String category;

    public Transaction() {}

    public Transaction(long id, int userId, String name, int amount, String category) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.amount = amount;
        this.category = category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() { return userId; }

    public void setUserId(int usedId) { this.userId = usedId; }

    public String getName() {
        return name;
    }

    public void setName(String name) { this.name = name; }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
