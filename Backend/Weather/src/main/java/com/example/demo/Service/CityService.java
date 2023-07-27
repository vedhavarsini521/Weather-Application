package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Model.City;
import com.example.demo.Repo.CityRepo;


@Service
public class CityService {
	
	@Autowired
	CityRepo repository;
	
	public String addCity(City city)
	{
		repository.save(city);
		return "Record added";
	}
	
	public List<City>getCity(){
		return repository.findAll();
	}
	
	
//	public List<City>get(){
//		return repository.findAll();
//	}
	
	
	public String deleteCity(int c_id) {
		repository.deleteById(c_id);
		return "Record deleted";
		}

}



