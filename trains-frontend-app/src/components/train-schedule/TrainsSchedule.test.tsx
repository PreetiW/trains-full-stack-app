import React from 'react';
import { render } from '@testing-library/react';
import { TrainsSchedule } from './TrainsSchedule';
import { TrainData } from '../../types/trains.types';

it('should render the TrainsSchedule component', () => {

    const mockTrainData: TrainData = {
        trainId: 123,
        trainName: "Shayadri Express",
        sourceStation: "Pune",
        destinationStation: "Kalyan",
        departureTime: "1:00 PM",
        arrivalTime: '5:00 PM',
        totalTravelDuration: '5hr 30m',
    }
    const { getByText } = render(<TrainsSchedule {...mockTrainData} />);

    expect(getByText("123")).toBeTruthy();
    expect(getByText("Shayadri Express")).toBeTruthy();
    expect(getByText("Pune")).toBeTruthy();
    expect(getByText("Kalyan")).toBeTruthy();
    expect(getByText("1:00 PM")).toBeTruthy();
    expect(getByText("5:00 PM")).toBeTruthy();
    expect(getByText("5hr 30m")).toBeTruthy();

});