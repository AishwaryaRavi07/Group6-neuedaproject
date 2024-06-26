package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.UserDao;
import com.invoiceprocessing.server.dto.LoginDTO;
import com.invoiceprocessing.server.dto.UserDTO;
import com.invoiceprocessing.server.model.User;
import com.invoiceprocessing.server.response.LoginMessage;
import com.invoiceprocessing.server.response.RegisterMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    public UserServiceImpl(
            UserDao userRepo,
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public RegisterMessage addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getName(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getGender()
        );
        if(user.getUsername().contains(" "))
            return new RegisterMessage("Invalid username", false);
        else {
            User user2 = userRepo.findOneByUsername(user.getUsername());
            if (user2!=null)
                return new RegisterMessage("Username exists", false);
            else if (userDTO.getPassword().length()<6){
                return new RegisterMessage("Password has to be at least 6 characters long", false);
            }
            else {
                // Regular Expression
                String regex = "^(.+)@(.+)$";
                //Compile regular expression to get the pattern
                Pattern pattern = Pattern.compile(regex);

                Matcher matcher = pattern.matcher(user.getEmail());
                if(!matcher.matches()){
                    return new RegisterMessage("Invalid email", false);
                }
                else if (user.getGender().equalsIgnoreCase("Male") || user.getGender().equalsIgnoreCase("Female") || user.getGender().equalsIgnoreCase("Prefer not to say")){
                    userRepo.save(user);
                    return new RegisterMessage("Registration Successful", true);
                } else {
                    return new RegisterMessage("Invalid gender", false);
                }
            }
        }
    }
    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        User user1 = userRepo.findOneByUsername(loginDTO.getUsername());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByUsernameAndPassword(loginDTO.getUsername(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginMessage("Login Successful", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {
                return new LoginMessage("Wrong Password", false);
            }
        }else {
            return new LoginMessage("User does not exist", false);
        }
    }
    @Override
    public User getAuthenticatedUser(LoginDTO loginDTO){
        User user = userRepo.findOneByUsername(loginDTO.getUsername());
        return user;
    }
}