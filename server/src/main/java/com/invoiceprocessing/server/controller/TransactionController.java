package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.dto.UserIdDTO;
import com.invoiceprocessing.server.model.Transaction;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.response.TransactionAnalyticsResponse;
import com.invoiceprocessing.server.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping("/add-transaction")
    public ResponseEntity<?> addTransaction(@RequestBody Transaction transaction) {
        GeneralResponse res = this.transactionService.addTransaction(transaction);
        if(res.getStatus())
            return ResponseEntity.ok(res);
        else
            return ResponseEntity.badRequest().body(res);
    }

    @GetMapping("/get-transactions/{userId}")
    public TransactionAnalyticsResponse getTransactions(@PathVariable String userId) {
        return this.transactionService.getTransactions(userId);
    }

    @DeleteMapping("/delete-transactions")
    public ResponseEntity<?> deleteTransactions(@RequestBody UserIdDTO userIdDTO) {
        GeneralResponse res = this.transactionService.deleteTransactions(userIdDTO);
        if(res.getStatus())
            return ResponseEntity.ok(res);
        else
            return ResponseEntity.badRequest().body(res);
    }
}
