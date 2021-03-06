package com.preeti.trains.webservices.trainswebservices.trains;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

// Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TrainsController {
	
	
	@Autowired
	private TrainsJpaRepository trainsJpaRepository;
	

	@GetMapping(path="/trains-schedule")
	public List<TrainsSchedule> getAllTrainsScheduleData() {
		return trainsJpaRepository.findAll();
	}
	
	@PostMapping(path="/trains")
	public ResponseEntity<TrainsSchedule> addTrainsData(@RequestBody TrainsSchedule trainsSchedule){
		TrainsSchedule createdTrainsSchedule =  trainsJpaRepository.save(trainsSchedule);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(createdTrainsSchedule.getTrainId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}

}
