package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dto.LoginDTO;
import com.invoiceprocessing.server.dto.UserDTO;
import com.invoiceprocessing.server.response.LoginMessage;
import com.invoiceprocessing.server.response.RegisterMessage;

public interface UserService {
    RegisterMessage addUser(UserDTO userDTO);
    LoginMessage loginUser(LoginDTO loginDTO);
}