package com.preeti.trains.webservices.trainswebservices.trains;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainsJpaRepository extends JpaRepository<TrainsSchedule, Long>  {

}
