//package com.invoiceprocessing.server.services;
//
//import com.invoiceprocessing.server.dao.UserDao;
//import com.invoiceprocessing.server.dto.LoginDTO;
//import com.invoiceprocessing.server.dto.UserDTO;
//import com.invoiceprocessing.server.model.User;
//import com.invoiceprocessing.server.response.LoginMesage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UserServiceImpl implements UserService{
//
//    @Autowired
//    private UserDao userRepo;
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//    @Override
//    public String addUser(UserDTO userDTO) {
//        User user = new User(
//                userDTO.getUserid(),
//                userDTO.getUsername(),
//                userDTO.getEmail(),
//                this.passwordEncoder.encode(userDTO.getPassword())
//        );
//        userRepo.save(user);
//        return user.getUsername();
//    }
//    UserDTO userDTO;
//    @Override
//    public LoginMesage loginUser(LoginDTO loginDTO) {
//        String msg = "";
//        User user1 = userRepo.findByEmail(loginDTO.getEmail());
//        if (user1 != null) {
//            String password = loginDTO.getPassword();
//            String encodedPassword = user1.getPassword();
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//            if (isPwdRight) {
//                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
//                if (user.isPresent()) {
//                    return new LoginMesage("Login Success", true);
//                } else {
//                    return new LoginMesage("Login Failed", false);
//                }
//            } else {
//                return new LoginMesage("password Not Match", false);
//            }
//        }else {
//            return new LoginMesage("Email not exits", false);
//        }
//    }
//}