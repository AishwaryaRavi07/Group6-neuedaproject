package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dto.LoginDTO;
import com.invoiceprocessing.server.dto.UserDTO;
import com.invoiceprocessing.server.model.User;
import com.invoiceprocessing.server.response.GeneralResponse;

public interface UserService {
    GeneralResponse addUser(UserDTO userDTO);
    GeneralResponse loginUser(LoginDTO loginDTO);
    User getAuthenticatedUser(LoginDTO loginDTO);
}