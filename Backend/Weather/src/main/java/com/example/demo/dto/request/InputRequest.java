package com.example.demo.dto.request;

import java.sql.Date;
import java.sql.Time;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class InputRequest {
	private String name;
	private int pcode;
//	private String geoCoord;
	private Date date;
	private Time time;
	private int cel;
	private int far;
	private String description;
	private String disaster;
	private String status;
	
	private String precipitation;
	private String humidity;
	private String windspeed;
	private String visibility;
	

	private String s_place;
	private String e_place;
	private String p1;
	private String p2;
	
	
	private int temp1;
	private String des1;
	private int temp2;
	private String des2;
	private int temp3;
	private String des3;
	private int temp4;
	private String des4;
	
}


