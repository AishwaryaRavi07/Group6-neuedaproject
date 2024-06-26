//package com.invoiceprocessing.server.dao;
//
//import com.invoiceprocessing.server.model.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.stereotype.Repository;
//import java.util.Optional;
//
//@EnableJpaRepositories
//@Repository
//public interface UserDao extends JpaRepository<User,Integer>
//{
//    Optional<User> findOneByEmailAndPassword(String email, String password);
//    User findByEmail(String email);
//}