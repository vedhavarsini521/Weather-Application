package com.example.demo.Repo;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.Model.DateandTime;


@Repository

public interface DateandTimeRepo extends JpaRepository <DateandTime,Integer>{

	
	@Query("SELECT t.cel FROM TempandDes t JOIN DateandTime d ON d.d_id = t.t_id JOIN City c ON c.c_id = d.p_id WHERE c.name = :name AND d.date = :date AND d.time = :time")
	int getTempByDate(String name,Date date,Time time);
	
	
	
	
	
}
