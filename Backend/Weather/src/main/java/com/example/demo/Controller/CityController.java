package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.City;

import com.example.demo.Service.CityService;


@RestController
@CrossOrigin("*")
public class CityController {
	@Autowired
	CityService service;

	@CrossOrigin("*")
	@PostMapping("/city")
	public String addgadgets(@RequestBody City city) {
		return service.addCity(city);
	}

	@CrossOrigin("*")
	@GetMapping("/city/get")
	public List<City> read(){
		return service.getCity();
	}


	@CrossOrigin("*")
	@DeleteMapping("/city/{c_id}")
	public String delete(@PathVariable int c_id) {
		return service.deleteCity(c_id);
	}


}
