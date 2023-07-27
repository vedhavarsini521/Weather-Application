package com.example.demo.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Journey {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int j_id;
//	private int s_id;
//	private int e_id;
	private String s_place;
	private String e_place;
	private String p1;
	private String p2;
	private Date date;
//	private int t_id;
	private int temp1;
	private String des1;
	private int temp2;
	private String des2;
	private int temp3;
	private String des3;
	private int temp4;
	private String des4;
	

}
