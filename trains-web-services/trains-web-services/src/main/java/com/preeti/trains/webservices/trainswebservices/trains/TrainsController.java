package com.preeti.trains.webservices.trainswebservices.trains;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.preeti.trains.webservices.trainswebservices.trains.TrainsSchedule;

// Controller
@RestController
public class TrainsController {
	
	@Autowired
	private trainsHardCodedService trainsService;
	
	// GET
	// URI - /hello-world
	// method - "Hello World"
	@GetMapping( path = "/hello-world")
	public String helloWorld() {
		return "Hello Preeti Wadhwani, You are most beautiful!";
	}
	
	@GetMapping(path="/trains-schedule")
	public List<TrainsSchedule> getAllTrainsScheduleData() {
		return trainsService.findAll();
	}

}
