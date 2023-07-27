package com.example.demo.Model;



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
public class TempandDes {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int tem_id;
	private int cel;
	private int far;
	private String description;
	private int t_id;
	
	
}
