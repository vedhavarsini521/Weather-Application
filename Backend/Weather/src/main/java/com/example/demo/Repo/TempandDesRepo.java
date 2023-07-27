package com.example.demo.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Model.City;
import com.example.demo.Model.TempandDes;

public interface TempandDesRepo extends JpaRepository<TempandDes,Integer>{
	@Query("SELECT tem FROM TempandDes tem WHERE tem.tem_id = :tem_id")
	List<TempandDes> findByTem_Id(@Param("tem_id") int tem_id);
}
