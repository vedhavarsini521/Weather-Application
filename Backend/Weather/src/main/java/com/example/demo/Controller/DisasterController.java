package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Disaster;
import com.example.demo.Service.DisasterService;

@RestController
public class DisasterController {
	@Autowired
	DisasterService service;

	@PostMapping("/dis")
	public String addgadgets(@RequestBody Disaster disaster) {
		return service.addDisaster(disaster);
	}


	@GetMapping("/dis")
	public List<Disaster> read(){
		return service.getDisaster();
	}



	@DeleteMapping("/dis")
	public String delete(@RequestParam int dis_id) {
		return service.deleteDisaster(dis_id);
	}


}
