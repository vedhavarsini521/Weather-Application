package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Login;
import com.example.demo.Service.LoginService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Slf4j
public class LoginController {
	@Autowired
	LoginService service;
	
	@CrossOrigin("*") 
	@PostMapping("/user")
	public String addUser(@RequestBody Login user) {
		log.info("user");
		return service.addUser(user);

	}



}
