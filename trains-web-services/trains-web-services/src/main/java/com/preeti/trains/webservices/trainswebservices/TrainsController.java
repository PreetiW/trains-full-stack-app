package com.preeti.trains.webservices.trainswebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
public class TrainsController {
	
	// GET
	// URI - /hello-world
	// method - "Hello World"
	@GetMapping( path = "/hello-world")
	public String helloWorld() {
		return "Hello Preeti Wadhwani, You are most beautiful!";
	}

}
