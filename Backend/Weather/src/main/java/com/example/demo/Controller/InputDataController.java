package com.example.demo.Controller;


import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.City;
import com.example.demo.Model.DateandTime;
import com.example.demo.Model.Disaster;
import com.example.demo.Model.Info;
import com.example.demo.Model.Journey;
import com.example.demo.Model.TempandDes;
import com.example.demo.Repo.CityRepo;
import com.example.demo.Repo.DateandTimeRepo;
import com.example.demo.Repo.DisasterRepo;
import com.example.demo.Repo.InfoRepo;
import com.example.demo.Repo.JourneyRepo;
import com.example.demo.Repo.TempandDesRepo;
import com.example.demo.dto.request.InputRequest;
import com.example.demo.dto.request.SearchRequest;



@RestController
@CrossOrigin("*")
public class InputDataController {
	@Autowired
	CityRepo crepo;
	
	@Autowired
	DateandTimeRepo drepo;
	
//	@Autowired
//	DateandTime dservice;
	
	@Autowired
	TempandDesRepo trepo;
	
	@Autowired
	InfoRepo lrepo;
	
	@Autowired
	DisasterRepo disrepo;
	
	@Autowired
	JourneyRepo jRepo;
	
	
	@CrossOrigin("*")
	@PostMapping("/post/details")
	public void create(@RequestBody InputRequest request) {
        City c = new City();
        c.setName(request.getName());
        c.setPcode(request.getPcode());
//        c.setGeoCoord(request.getGeoCoord());
        c = crepo.save(c);
        
        DateandTime d = new DateandTime();
        d.setP_id(c.getC_id());
        d.setDate(request.getDate());
        d.setTime(request.getTime());
        d = drepo.save(d);
        
        TempandDes t=new TempandDes();
        t.setT_id(d.getD_id());
        t.setCel(request.getCel());
        t.setDescription(request.getDescription());
        t.setFar(request.getFar());
        t=trepo.save(t);
        
        Info l=new Info();
        l.setPrecipitation(request.getPrecipitation());
        l.setHumidity(request.getHumidity());
        l.setVisibility(request.getVisibility());
        l.setWindspeed(request.getWindspeed());
        l.setT_id(d.getD_id());
        l=lrepo.save(l);
             
        Disaster dis=new Disaster();
        dis.setT_id(d.getD_id());
        dis.setDisaster(request.getDisaster());
        dis.setStatus(request.getStatus());
        dis=disrepo.save(dis);
        
    	Journey j=new Journey();
    	j.setS_place(request.getS_place());
    	j.setE_place(request.getE_place());
    	j.setP1(request.getP1());
    	j.setP2(request.getP2());
    	j.setDate(request.getDate());
    	 j.setTemp1(request.getTemp1());
    	 j.setDes1(request.getDes1());
    	 j.setTemp2(request.getTemp2());
    	 j.setDes2(request.getDes2());
    	 j.setTemp3(request.getTemp3());
    	 j.setDes3(request.getDes3());
    	 j.setTemp4(request.getTemp4());
    	 j.setDes4(request.getDes4());
    		
    	 j=jRepo.save(j);
    }
	@CrossOrigin("*")
	@PostMapping("/getTemp")
	public int getTemp(@RequestBody SearchRequest sreq)
	{
		String cityName=sreq.getName();
		Date date=sreq.getDate();
		Time time=sreq.getTime();		
		return drepo. getTempByDate(cityName,date,time);

	}
	
	@PostMapping("/getInfo")
	public List<String> getInfo(@RequestBody SearchRequest sreq)
	{
		String cityName=sreq.getName();
		Date date=sreq.getDate();
		Time time=sreq.getTime();		
		return lrepo. getInfoByDate(cityName,date,time);

	}
}