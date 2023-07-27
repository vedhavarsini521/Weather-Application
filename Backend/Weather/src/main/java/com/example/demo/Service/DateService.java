package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Model.DateandTime;

import com.example.demo.Repo.DateandTimeRepo;


@Service
public class DateService {

	@Autowired
	DateandTimeRepo repository;
	
	public String addDate(DateandTime date)
	{
		repository.save(date);
		return "Record added";
	}
	
	public List<DateandTime>getDate(){
		return repository.findAll();
	}
	
	
	public String deleteDate(int d_id) {
		repository.deleteById(d_id);
		return "Record deleted";
		}

	
}
