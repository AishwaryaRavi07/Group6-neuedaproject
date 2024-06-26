//package com.invoiceprocessing.server.controller;
//
//import com.invoiceprocessing.server.dto.LoginDTO;
//import com.invoiceprocessing.server.dto.UserDTO;
//import com.invoiceprocessing.server.response.LoginMesage;
//import com.invoiceprocessing.server.services.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
//@RequestMapping("/api/v1/user")
//public class UserController {
//    @Autowired
//    private UserService userService;
//    @PostMapping(path = "/save")
//    public String saveUser(@RequestBody UserDTO userDTO)
//    {
//        String id = userService.addUser(userDTO);
//        return id;
//    }
//    @PostMapping(path = "/login")
//    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
//    {
//        LoginMesage loginResponse = userService.loginUser(loginDTO);
//        return ResponseEntity.ok(loginResponse);
//    }
//}