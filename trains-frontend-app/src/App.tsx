import React, { useState } from 'react';
import './App.css';
import { Loading } from './components/loading/Loading';
import { TrainsSchedule } from './components/train-schedule/TrainsSchedule';
import { TrainsForm } from './components/trains-form/TrainsForm';
import { LOADING_COMPONENT, TRAINS_FORM_COMPONENT, TRAINS_SCHEDULE_COMPONENT } from './constants';
import TrainsDataService from './service/TrainsDataService';
import { TrainData } from './types/trains.types';


function App() {

  const [displayComponent, setDisplayComponent] = useState(TRAINS_FORM_COMPONENT)
  const [trainsScheduleData, setTrainsScheduleData] = useState<TrainData[] | undefined>()

  const switchDisplayComponent = (displayComponent: string) => {
    setDisplayComponent(displayComponent);
  }

  const displayAllTrainsSchedule = () => {
    switchDisplayComponent(LOADING_COMPONENT);

    TrainsDataService.retrieveAllTainsData()
      .then((response) => {
        if (response.data) {
          setTrainsScheduleData(response.data);
          switchDisplayComponent(TRAINS_SCHEDULE_COMPONENT);
        }
      }).catch(error => {
        console.log(error)
      })

  }

  const submitTrainScheduleData = (newTrainSchedule: TrainData) => {
    switchDisplayComponent(LOADING_COMPONENT);

    TrainsDataService.createTrainsSchedule(newTrainSchedule)
      .then((response) => {
        displayAllTrainsSchedule();
      })
      .catch(error => { console.log(error) })
  }


  return (
    <div className="app">
      <header className="app-header">
        <img src={process.env.PUBLIC_URL + '/train-sample.jpg'} className="train-img" alt="train" />
        <div className="train-text">Trains Schedules</div>
        <div className="button-wrapper">
          <button className="button" onClick={() => switchDisplayComponent(TRAINS_FORM_COMPONENT)}>Add Train Schedule</button>
          <button className="button" onClick={displayAllTrainsSchedule}>Diplay Trains Schedule</button>
        </div>
      </header>

      <section>
        {displayComponent === TRAINS_FORM_COMPONENT ? <TrainsForm onFormSubmit={submitTrainScheduleData} /> : null}

        {displayComponent === TRAINS_SCHEDULE_COMPONENT ?
          trainsScheduleData?.map((trainData: TrainData, key) => {
            return <TrainsSchedule key={key} {...trainData} />
          })
          : null}

        {displayComponent === LOADING_COMPONENT ? <Loading loadingText="Please wait, saving and loading trains data..." /> : null}
      </section>
    </div>
  );
}

export default App;
