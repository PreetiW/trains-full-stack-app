import React, { useState } from 'react';
import './App.css';
import { Loading } from './components/loading/Loading';
import { TrainData, TrainsSchedule } from './components/train-schedule/TrainsSchedule';
import { TrainsForm } from './components/trains-form/TrainsForm';
import TrainsDataService from './service/TrainsDataService';

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
    switchDisplayComponent(LOADING);

    TrainsDataService.retrieveAllTainsData()
      .then((response) => {
        console.log("Response:", response)
        if (response.data) {
          setTrainsScheduleData(response.data);
          switchDisplayComponent(TRAINS_SCHEDULE);
        }
      }).catch(error => {
        console.log(error)
      })

  }

  const submitTrainScheduleData = () => {
    switchDisplayComponent(LOADING);

    let newTrainSchedule: TrainData = {
      trainId: 2,
      trainName: "Manavar Express",
      sourceStation: "Pune",
      destinationStation: "Kalyan",
      departureTime: "1:00 PM",
      arrivalTime: "5:00 PM",
      totalTravelDuration: "5hr 30m",
    }

    TrainsDataService.createTrainsSchedule(newTrainSchedule)
      .then((response) => {
        console.log("Create:", response)
      })
      .catch(error => { console.log(error) })
  }


  return (
    <div className="app">
      <header className="app-header">
        <img src={process.env.PUBLIC_URL + '/train-sample.jpg'} className="train-img" alt="train" />
        <div className="train-text">Trains Schedules</div>
        <div className="button-wrapper">
          {/* <button className="button" onClick={() => switchDisplayComponent(TRAINS_FORM)}>Add Train Schedule</button> */}
          <button className="button" onClick={submitTrainScheduleData}>Add Train Schedule</button>
          <button className="button" onClick={displayAllTrainsSchedule}>Diplay Trains Schedule</button>
        </div>
      </header>

      <section>
        {displayComponent === TRAINS_FORM ? <TrainsForm /> : null}
        {displayComponent === TRAINS_SCHEDULE ? trainsScheduleData?.map((trainData: TrainData, key) => {
          console.log("Checking", trainData)
          return <TrainsSchedule key={key} {...trainData} />
        }) : null}
        {displayComponent === LOADING ? <Loading loadingText="Please wait, loading trains schedule..." /> : null}
      </section>
    </div>
  );
}

export default App;
