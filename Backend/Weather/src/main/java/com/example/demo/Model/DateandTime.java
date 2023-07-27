package com.example.demo.Model;


import java.sql.Date;

import java.sql.Time;

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
public class DateandTime {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int d_id;
	private int p_id;
	private Date date;
	private Time time;
	
//	 @OneToOne(mappedBy = "date")
//	    private City city;

}
