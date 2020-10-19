package com.preeti.trains.webservices.trainswebservices;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.preeti.trains.webservices.trainswebservices.trains.TrainsController;
import com.preeti.trains.webservices.trainswebservices.trains.TrainsJpaRepository;
import com.preeti.trains.webservices.trainswebservices.trains.TrainsSchedule;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TrainsController.class)
public class TrainsControllerTests  {
	
	private static List<TrainsSchedule> trainsScheduleList = new ArrayList<TrainsSchedule>();
	private static long idCounter = 0;
	static {
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 1", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 2", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 3", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
	}
	
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private TrainsJpaRepository service;
	
	@Test
	public void shouldReturnTrainsData() throws Exception {
		String uri = "/trains-schedule";
		when(service.findAll()).thenReturn(trainsScheduleList);
		
		this.mockMvc.perform(get(uri)).andDo(print()).andExpect(status().isOk())
		.andExpect(content().contentType("application/json"));
		
		MvcResult mvcResult = this.mockMvc.perform(get("/trains-schedule")).andReturn();
		
		String content = mvcResult.getResponse().getContentAsString();
		assertTrue(content.contains("Indrani Express 1"));
		assertTrue(content.contains("Indrani Express 2"));
		assertTrue(content.contains("Indrani Express 3"));
	}
	
	@Test
	public void createTrainsSchedule() throws Exception {
	   String uri = "/trains";
	   TrainsSchedule trainsSchedule = new TrainsSchedule(++idCounter, "Indrani Express 4", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min");
	   String trainScheduleJsonString ="{\"trainId\":1005,\"trainName\":\"Sayadri Express\",\"sourceStation\":\"Pune\",\"destinationStation\":\"Kalyan\",\"departureTime\":\"13:00 PM\",\"arrivalTime\":\"18:30 PM\",\"totalTravelDuration\":\"5hr 30m\"}";
	   
	   when(service.save(Mockito.any(TrainsSchedule.class))).thenReturn(trainsSchedule);
	   
	
	   RequestBuilder requestBuilder = MockMvcRequestBuilders
					.post(uri)
					.accept(MediaType.APPLICATION_JSON).content(trainScheduleJsonString)
					.contentType(MediaType.APPLICATION_JSON);
	   MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
		
	   int status = mvcResult.getResponse().getStatus();
	   assertEquals(HttpStatus.CREATED.value(),status);
	   assertEquals("http://localhost/trains/4",
			   mvcResult.getResponse().getHeader(HttpHeaders.LOCATION));
	}

}
