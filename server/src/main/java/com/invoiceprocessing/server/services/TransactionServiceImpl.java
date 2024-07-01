package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.TransactionDao;
import com.invoiceprocessing.server.dto.UserIdDTO;
import com.invoiceprocessing.server.model.Transaction;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.response.TransactionAnalyticsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    TransactionDao transactionDao;

    @Override
    public GeneralResponse addTransaction(Transaction transaction) {
        try {
            transactionDao.save(transaction);
            return new GeneralResponse("Transaction added successfully", true);
        } catch(Error e){
            System.out.println("Error occurred while adding transaction: "+e.toString());
            return new GeneralResponse("Failed to add transaction" , false);
        }
    }

    @Override
    public TransactionAnalyticsResponse getTransactions(UserIdDTO userIdDTO) {
        List<Transaction> transactions = transactionDao.findByUserId(Integer.parseInt(userIdDTO.getUserId()));

        System.out.println("hiii"+ transactions.size());
        List<Transaction> income = new ArrayList<Transaction>();
        List<Transaction> spendings = new ArrayList<Transaction>();
        int availableMoney = 0;
        for (Transaction t: transactions){
            if(t.getAmount()>0){
                income.add(t);
            } else {
                spendings.add(t);
            }
            availableMoney += t.getAmount();
        }


        TransactionAnalyticsResponse response = new TransactionAnalyticsResponse(
            income,
            spendings,
            availableMoney
        );

        return response;
    }

    @Override
    public boolean deleteTransactions(UserIdDTO userIdDTO) {
        try {
            transactionDao.deleteAllByUserId(Integer.parseInt(userIdDTO.getUserId()));
            return true;
        } catch (Error e){
            System.out.println("Error occurred while deleting: "+e.toString());
            return false;
        }
    }
}
