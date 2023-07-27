package com.example.demo.Controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.DateandTime;

import com.example.demo.Service.DateService;


@RestController
@CrossOrigin("*")

public class DateController {

	@Autowired
	DateService service;
	@CrossOrigin("*")
	@PostMapping("/d")
	public String addDate(@RequestBody DateandTime date) {
		return service.addDate(date);
	}

	@CrossOrigin("*")
	@GetMapping("/d/get")
	public List<DateandTime> read(){
		return service.getDate();
	}



	@DeleteMapping("/d")
	public String delete(@RequestParam int d_id) {
		return service.deleteDate(d_id);
	}

	

	
}
