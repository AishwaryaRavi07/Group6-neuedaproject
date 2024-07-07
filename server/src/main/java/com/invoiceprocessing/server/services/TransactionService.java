package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dto.UserIdDTO;
import com.invoiceprocessing.server.model.Transaction;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.response.TransactionAnalyticsResponse;

public interface TransactionService {

    public GeneralResponse addTransaction(Transaction transaction);

    public TransactionAnalyticsResponse getTransactions(String userId);

    public GeneralResponse deleteTransactions(UserIdDTO userIdDTO);
}
