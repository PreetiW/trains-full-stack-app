package com.preeti.trains.webservices.trainswebservices.trains;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class trainsHardCodedService {
	
	private static List<TrainsSchedule> trainsScheduleList = new ArrayList<TrainsSchedule>();
	private static int idCounter = 0;
	static {
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 1", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 2", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 3", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
	}
	
	public List<TrainsSchedule> findAll(){
		return trainsScheduleList;
	}
}
