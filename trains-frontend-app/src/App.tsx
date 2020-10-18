import React, { useState } from 'react';
import './App.css';
import { Loading } from './components/loading/loading';
import { TrainData, TrainsSchedule } from './components/train-schedule/trainsSchedule';
import { TrainsForm } from './components/trains-form/trainsForm';

type EventHandlerProps = {
  onClick: (e: React.MouseEvent) => void;
}

function App() {
  const TRAINS_FORM = "trains_form";
  const TRAINS_SCHEDULE = "trains_schedule";
  const LOADING = "loading";

  const [displayComponent, setDisplayComponent] = useState(TRAINS_FORM)
  const [trainsScheduleData, setTrainsScheduleData] = useState<TrainData[] | undefined>()

  const switchDisplayComponent = (displayComponent: string) => {
    setDisplayComponent(displayComponent);
  }

  const displayAllTrainsSchedule = () => {
    //switchDisplayComponent(LOADING);
    const trainData: TrainData[] = [{
      trainId: 1,
      trainName: "Train 1",
      sourceStation: "Kalyan",
      destinationStation: "Pune",
      departureTime: "12:00 PM",
      arrivalTime: "3:00 PM",
      totalTravelDuration: "3hr 20min"
    }, {
      trainId: 2,
      trainName: "Train 2",
      sourceStation: "Kalyan",
      destinationStation: "Pune",
      departureTime: "12:00 PM",
      arrivalTime: "3:00 PM",
      totalTravelDuration: "3hr 20min"
    }, {
      trainId: 3,
      trainName: "Train 2",
      sourceStation: "Kalyan",
      destinationStation: "Pune",
      departureTime: "12:00 PM",
      arrivalTime: "3:00 PM",
      totalTravelDuration: "3hr 20min"
    },
    {
      trainId: 4,
      trainName: "Train 4",
      sourceStation: "Kalyan",
      destinationStation: "Pune",
      departureTime: "12:00 PM",
      arrivalTime: "3:00 PM",
      totalTravelDuration: "3hr 20min"
    },
    {
      trainId: 5,
      trainName: "Train 5",
      sourceStation: "Kalyan",
      destinationStation: "Pune",
      departureTime: "12:00 PM",
      arrivalTime: "3:00 PM",
      totalTravelDuration: "3hr 20min"
    }]
    setTrainsScheduleData(trainData);
    switchDisplayComponent(TRAINS_SCHEDULE);
  }


  return (
    <div className="app">
      <header className="app-header">
        <img src={process.env.PUBLIC_URL + '/train-sample.jpg'} className="train-img" alt="train" />
        <div className="train-text">Trains Schedules</div>
        <div className="button-wrapper">
          <button className="button" onClick={() => switchDisplayComponent(TRAINS_FORM)}>Add Train Schedule</button>
          <button className="button" onClick={displayAllTrainsSchedule}>Diplay Trains Schedule</button>
        </div>
      </header>

      <section>
        {displayComponent === TRAINS_FORM ? <TrainsForm /> : null}
        {displayComponent === TRAINS_SCHEDULE ? trainsScheduleData?.map((trainData: TrainData) => {
          console.log("Checking", trainData)
          return <TrainsSchedule key={trainData.trainId} {...trainData} />
        }) : null}
        {displayComponent === LOADING ? <Loading loadingText="Please wait, loading trains schedule..." /> : null}
      </section>
    </div>
  );
}

export default App;
