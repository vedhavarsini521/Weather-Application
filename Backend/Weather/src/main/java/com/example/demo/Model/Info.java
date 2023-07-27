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
public class Info {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int i_id;
	private String precipitation;
	private String humidity;
	private String windspeed;
	private String visibility;
	private int t_id;

}
