package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login,Integer>{

}
