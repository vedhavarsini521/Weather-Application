package com.example.demo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Login;
import com.example.demo.Repo.LoginRepo;


@Service
public class LoginService {
	
	@Autowired
	LoginRepo repository;
	
	public String addUser(Login user)
	{
		repository.save(user);
		return "Record added";
	}
	

}



