import React from 'react';
import './trainsSchedule.css';

export interface TrainData {
    trainId: number;
    trainName: string;
    sourceStation: string;
    destinationStation: string;
    departureTime: string;
    arrivalTime: string;
    totalTravelDuration: string;
}

export const TrainsSchedule = (trainData: TrainData) => {

    return (
        <section className="card">
            <div className="container">
                <div className="train-header"><span>{trainData.trainId}</span> <span>{trainData.trainName}</span></div>
                <div className="row">
                    <div className="column">
                        <div>{trainData.departureTime}</div>
                        <div>{trainData.sourceStation}</div>
                    </div>

                    <div className="column">
                        <div>{trainData.totalTravelDuration}</div>
                        <div className="seperator"></div>
                    </div>
                    <div className="column">
                        <div>{trainData.arrivalTime}</div>
                        <div>{trainData.destinationStation}</div>
                    </div>
                </div>
            </div>
        </section>

    );
}

