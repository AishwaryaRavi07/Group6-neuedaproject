package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.dto.LoginDTO;
import com.invoiceprocessing.server.dto.UserDTO;
import com.invoiceprocessing.server.response.LoginMessage;
import com.invoiceprocessing.server.response.RegisterMessage;
import com.invoiceprocessing.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO)
    {
        RegisterMessage registerMessage = userService.addUser(userDTO);
        if(registerMessage.getStatus()) {
            return ResponseEntity.ok(registerMessage);
        } else{
            return ResponseEntity.badRequest().body(registerMessage);
        }
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginMessage loginResponse = userService.loginUser(loginDTO);
        if(loginResponse.getStatus()) {
            return ResponseEntity.ok(loginResponse);
        } else{
            return ResponseEntity.badRequest().body(loginResponse);
        }
    }
}