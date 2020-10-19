package com.preeti.trains.webservices.trainswebservices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import com.preeti.trains.webservices.trainswebservices.trains.TrainsController;

@SpringBootTest
class TrainsWebServicesApplicationTests {
	
	@Autowired 
	private TrainsController trainsController; 

	@Test
	void contextLoads() {
		assertThat(trainsController).isNotNull();
	}

}
