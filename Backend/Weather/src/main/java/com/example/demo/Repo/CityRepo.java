package com.example.demo.Repo;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.City;



@Repository

public interface CityRepo extends JpaRepository <City,Integer>{
	@Query("SELECT c FROM City c WHERE c.c_id = :c_id")
	List<City> findByC_Id(@Param("c_id") int c_id);

}