package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
@EnableJpaRepositories
@Repository
public interface TransactionDao extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(int userId);

    boolean deleteAllByUserId(int userId);

    boolean deleteByUserId(int userId);
}
