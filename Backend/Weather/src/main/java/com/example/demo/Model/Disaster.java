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
public class Disaster {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int dis_id;
	private String disaster;
	private String status;
	private int t_id;
	
	
}
