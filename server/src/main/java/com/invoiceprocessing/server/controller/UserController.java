package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.dto.LoginDTO;
import com.invoiceprocessing.server.dto.UserDTO;
import com.invoiceprocessing.server.model.User;
import com.invoiceprocessing.server.response.LoginTokenResponse;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.services.JWTService;
import com.invoiceprocessing.server.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;
    private JWTService jwtService;

    public UserController(JWTService jwtService, UserService authenticationService) {
        this.jwtService = jwtService;
        this.userService = authenticationService;
    }
    @PostMapping(path = "/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO)
    {
        GeneralResponse registerMessage = userService.addUser(userDTO);
        
        if(registerMessage.getStatus()) {
            // logging in user 
            
            User authenticatedUser = userService.getAuthenticatedUser(new LoginDTO(
                userDTO.getUsername(),
                userDTO.getPassword()
            ));
            String jwtToken = jwtService.generateToken(authenticatedUser);
            LoginTokenResponse regTokenResponse = new LoginTokenResponse(
                    "Registration Successful", true, jwtToken, authenticatedUser.getUserid());
            return ResponseEntity.ok(regTokenResponse);
        } else{
            return ResponseEntity.badRequest().body(registerMessage);
        }
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        GeneralResponse loginResponse = userService.loginUser(loginDTO);

        if(loginResponse.getStatus()) {
            User authenticatedUser = userService.getAuthenticatedUser(loginDTO);
            String jwtToken = jwtService.generateToken(authenticatedUser);
            LoginTokenResponse loginTokenResponse = new LoginTokenResponse(
                    "Login Successful", true, jwtToken, authenticatedUser.getUserid());
            return ResponseEntity.ok(loginTokenResponse);
        } else{

            return ResponseEntity.badRequest().body(loginResponse);
        }
    }
}