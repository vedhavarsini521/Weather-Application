package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Info;
import com.example.demo.Service.InfoService;




@RestController
public class InfoController {
	@Autowired
	InfoService service;

	@PostMapping("/info")
	public String addgadgets(@RequestBody Info info) {
		return service.addInfo(info);
	}


	@GetMapping("/info")
	public List<Info> read(){
		return service.getInfo();
	}



	@DeleteMapping("/info")
	public String delete(@RequestParam int i_id) {
		return service.deleteInfo(i_id);
	}


}
