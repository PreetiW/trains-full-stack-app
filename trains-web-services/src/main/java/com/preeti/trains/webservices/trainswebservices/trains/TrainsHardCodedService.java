package com.preeti.trains.webservices.trainswebservices.trains;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TrainsHardCodedService {
	
	private static List<TrainsSchedule> trainsScheduleList = new ArrayList<TrainsSchedule>();
	private static long idCounter = 0;
	static {
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 1", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 2", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
		trainsScheduleList.add(new TrainsSchedule(++idCounter, "Indrani Express 3", "Kalyan", "Pune", "12:00 PM", "3:00 PM", "3hr 20min"));
	}
	
	public TrainsSchedule save(TrainsSchedule trainsSchedule) {
		trainsScheduleList.add(trainsSchedule);
		return trainsSchedule;
	}
	
	
	public List<TrainsSchedule> findAll(){
		return trainsScheduleList;
	}
	

}
