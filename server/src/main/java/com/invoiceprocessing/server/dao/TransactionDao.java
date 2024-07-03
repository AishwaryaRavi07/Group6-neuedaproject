package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Transaction;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
@EnableJpaRepositories
@Repository
@Transactional // required for deleteByCustomName()
public interface TransactionDao extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(int userId);

    int deleteByUserId(int userId);
}
