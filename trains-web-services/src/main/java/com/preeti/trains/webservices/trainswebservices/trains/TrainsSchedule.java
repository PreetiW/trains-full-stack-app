package com.preeti.trains.webservices.trainswebservices.trains;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TrainsSchedule {
	
	@Id
	private Long trainId;
	
	
	private String trainName;
	private String sourceStation;
	private String destinationStation;
	private String departureTime;
	private String arrivalTime;
	private String totalTravelDuration;
	
	protected TrainsSchedule() {
		
	}
	
	public TrainsSchedule(Long id, String trainName, String sourceStation, String destinationStation,
			String departureTime, String arrivalTime, String totalTravelDuration) {
		super();
		this.trainId = id;
		this.trainName = trainName;
		this.sourceStation = sourceStation;
		this.destinationStation = destinationStation;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.totalTravelDuration = totalTravelDuration;
	}
	
	
	public Long getTrainId() {
		return trainId;
	}
	public void setId(Long id) {
		this.trainId = id;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public String getSourceStation() {
		return sourceStation;
	}
	public void setSourceStation(String sourceStation) {
		this.sourceStation = sourceStation;
	}
	public String getDestinationStation() {
		return destinationStation;
	}
	public void setDestinationStation(String destinationStation) {
		this.destinationStation = destinationStation;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}
	public String getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public String getTotalTravelDuration() {
		return totalTravelDuration;
	}
	public void setTotalTravelDuration(String totalTravelDuration) {
		this.totalTravelDuration = totalTravelDuration;
	}



}
