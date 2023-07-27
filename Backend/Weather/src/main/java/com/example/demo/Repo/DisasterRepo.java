package com.example.demo.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.City;
import com.example.demo.Model.Disaster;


@Repository

public interface DisasterRepo extends JpaRepository <Disaster,Integer>{
	@Query("SELECT dis FROM Disaster dis WHERE dis.dis_id = :dis_id")
	List<Disaster> findByDis_Id(@Param("dis_id") int dis_id);
}