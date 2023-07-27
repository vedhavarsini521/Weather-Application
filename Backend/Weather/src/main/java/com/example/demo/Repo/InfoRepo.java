package com.example.demo.Repo;


import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.City;
import com.example.demo.Model.Info;



@Repository

public interface InfoRepo extends JpaRepository <Info,Integer>{
	@Query("SELECT i.humidity,i.visibility,i.precipitation,i.windspeed FROM Info i JOIN DateandTime d ON d.d_id = i.t_id JOIN City c ON c.c_id = d.p_id WHERE c.name = :name AND d.date = :date AND d.time = :time")
	List<String> getInfoByDate(String name,Date date,Time time);
}