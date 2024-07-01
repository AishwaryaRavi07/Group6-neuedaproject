package com.invoiceprocessing.server.response;

import com.invoiceprocessing.server.model.Transaction;

import java.util.List;

public class TransactionAnalyticsResponse {
    List<Transaction> income;
    List<Transaction> spendings;
    int availableMoney;

    public List<Transaction> getIncome() {
        return income;
    }

    public List<Transaction> getSpendings() {
        return spendings;
    }

    public int getAvailableMoney() {
        return availableMoney;
    }

    public void setIncome(List<Transaction> income) {
        this.income = income;
    }

    public void setSpendings(List<Transaction> spendings) {
        this.spendings = spendings;
    }

    public void setAvailableMoney(int availableMoney) {
        this.availableMoney = availableMoney;
    }

    public TransactionAnalyticsResponse(List<Transaction> income, List<Transaction> spendings, int availableMoney) {
        this.income = income;
        this.spendings = spendings;
        this.availableMoney = availableMoney;
    }
}
