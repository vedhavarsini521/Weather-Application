//package com.example.demo.Controller;
//
//import java.sql.Date;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.Model.City;
//import com.example.demo.Model.DateandTime;
//import com.example.demo.Model.Disaster;
//import com.example.demo.Model.Info;
//import com.example.demo.Model.Journey;
//import com.example.demo.Model.TempandDes;
//import com.example.demo.Repo.CityRepo;
//import com.example.demo.Repo.DateandTimeRepo;
//import com.example.demo.Repo.DisasterRepo;
//import com.example.demo.Repo.InfoRepo;
//import com.example.demo.Repo.JourneyRepo;
//import com.example.demo.Repo.TempandDesRepo;
//import com.example.demo.dto.request.InputRequest;
//
//@RestController
//@CrossOrigin("*")
//public class UpdateController {
//    @Autowired
//    CityRepo crepo;
//
//    @Autowired
//    DateandTimeRepo drepo;
//
//    @Autowired
//    TempandDesRepo trepo;
//
//    @Autowired
//    InfoRepo lrepo;
//
//    @Autowired
//    DisasterRepo disrepo;
//
//    @Autowired
//    JourneyRepo jRepo;
//
//    @CrossOrigin("*")
//    @PutMapping("/put/details")
//    public void update(@RequestParam int c_id, @RequestBody InputRequest request) {
//        // Check if the city exists in the database
//        Optional<City> optionalCity = crepo.findByC_Id(c_id);
//        if (optionalCity.isPresent()) {
//            City c = optionalCity.get();
//            c.setName(request.getName());
//            c.setPcode(request.getPcode());
//            // Update the city
//            crepo.save(c);
//
//            // Assuming there is a one-to-one mapping between City and DateandTime records
//            Optional<DateandTime> optionalDateAndTime = drepo.findByD_Id(c.getC_id());
//            if (optionalDateAndTime.isPresent()) {
//                DateandTime d = optionalDateAndTime.get();
//                d.setDate(request.getDate());
//                d.setTime(request.getTime());
//                // Update DateandTime
//                drepo.save(d);
//
//                // Assuming there is a one-to-one mapping between DateandTime and TempandDes records
//                Optional<TempandDes> optionalTempAndDes = trepo.findByTem_Id(d.getD_id());
//                if (optionalTempAndDes.isPresent()) {
//                    TempandDes t = optionalTempAndDes.get();
//                    t.setCel(request.getCel());
//                    t.setDescription(request.getDescription());
//                    t.setFar(request.getFar());
//                    // Update TempandDes
//                    trepo.save(t);
//
//                    // Assuming there is a one-to-one mapping between DateandTime and Info records
//                    Optional<Info> optionalInfo = lrepo.findByI_Id(d.getD_id());
//                    if (optionalInfo.isPresent()) {
//                        Info l = optionalInfo.get();
//                        l.setPrecipitation(request.getPrecipitation());
//                        l.setHumidity(request.getHumidity());
//                        l.setVisibility(request.getVisibility());
//                        l.setWindspeed(request.getWindspeed());
//                        // Update Info
//                        lrepo.save(l);
//
//                        // Assuming there is a one-to-one mapping between DateandTime and Disaster records
//                        Optional<Disaster> optionalDisaster = disrepo.findByDis_Id(d.getD_id());
//                        if (optionalDisaster.isPresent()) {
//                            Disaster dis = optionalDisaster.get();
//                            dis.setDisaster(request.getDisaster());
//                            dis.setStatus(request.getStatus());
//                            // Update Disaster
//                            disrepo.save(dis);
//                        }
//                    }
//                }
//            }
//
//            // Assuming there is a one-to-one mapping between City and Journey records
//            Optional<Journey> optionalJourney = jRepo.findByJ_Id(c.getC_id());
//            if (optionalJourney.isPresent()) {
//                Journey j = optionalJourney.get();
//                j.setS_place(request.getS_place());
//                j.setE_place(request.getE_place());
//                j.setP1(request.getP1());
//                j.setP2(request.getP2());
//                j.setDate(request.getDate());
//                // Update Journey
//                jRepo.save(j);
//            }
//        }
//    }
//}
