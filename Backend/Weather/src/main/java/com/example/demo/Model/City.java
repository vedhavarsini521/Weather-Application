package com.example.demo.Model;




import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class City {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int c_id;
	private String name;
	private int pcode;
	
//	@OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "p_id", referencedColumnName = "c_id")
//    private DateandTime date;
	
}
