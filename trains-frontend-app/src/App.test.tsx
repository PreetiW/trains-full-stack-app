import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import TrainsDataService from './service/TrainsDataService';
jest.mock('./service/TrainsDataService',  () => {
  return {
    retrieveAllTainsData: () => {
      return Promise.resolve({data: [{train_id:1, train_name: "Deccan Express"}]});
    },
  };
});


jest.mock('./components/trains-form/TrainsForm', () => {
  return {
    TrainsForm: () => {
      return <div>Trains Form Component
      </div>;
    },
  };
});

jest.mock('./components/train-schedule/TrainsSchedule', () => {
  return {
    TrainsSchedule: () => {
      return <div>Trains TrainsSchedule Component
      </div>;
    },
  };
});

it('should render the App component', () => {
  const { container } = render(<App />);

  expect(container.textContent)
    .toContain('Trains Schedules');
  expect(container.textContent)
    .toContain('Add Train Schedule');
  expect(container.textContent)
    .toContain('Diplay Trains Schedule');

});

it("should show trains form when Add Train Schedule button is clicked", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("Add Train Schedule"));
  expect(getByText('Trains Form Component')).toBeTruthy();
});

it("should show trains schedule list when Diplay Trains Schedule button is clicked", () => {


  const { getByText } = render(<App />);
  fireEvent.click(getByText("Diplay Trains Schedule"));
  expect(getByText('Trains Form Component')).toBeTruthy();
});

