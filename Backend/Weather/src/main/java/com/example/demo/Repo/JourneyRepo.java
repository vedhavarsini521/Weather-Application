package com.example.demo.Repo;

import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Model.City;
import com.example.demo.Model.Journey;

public interface JourneyRepo extends JpaRepository <Journey,Integer>{
//	@Query("SELECT j.temp1,j.temp2,j.temp3,j.temp4 from Journey j where j.s_place = :start AND j.e_place = :end AND j.date = :date")
//	List<Integer> getInfoByDate(String name,Date date,Time time);
}
