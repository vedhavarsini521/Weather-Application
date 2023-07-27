package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Model.Disaster;

import com.example.demo.Repo.DisasterRepo;


@Service
public class DisasterService {
	
	@Autowired
	DisasterRepo repository;
	
	public String addDisaster(Disaster disaster)
	{
		repository.save(disaster);
		return "Record added";
	}
	
	public List<Disaster>getDisaster(){
		return repository.findAll();
	}
	
	
	public String deleteDisaster(int dis_id) {
		repository.deleteById(dis_id);
		return "Record deleted";
		}

}



