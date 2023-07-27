package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Info;
import com.example.demo.Repo.InfoRepo;


@Service
public class InfoService {
	
	@Autowired
	InfoRepo repository;
	
	public String addInfo(Info info)
	{
		repository.save(info);
		return "Record added";
	}
	
	public List<Info>getInfo(){
		return repository.findAll();
	}
	
	
	public String deleteInfo(int i_id) {
		repository.deleteById(i_id);
		return "Record deleted";
		}

}



