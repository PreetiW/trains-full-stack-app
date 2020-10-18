import axios from 'axios';
import { API_ENDPOINT } from '../constants';
import { TrainData } from '../types/trains.types';

class TrainsDataService {

    createTrainsSchedule(trainData: TrainData) {
        return axios.post(`${API_ENDPOINT}/trains`, trainData);
    }

    retrieveAllTainsData() {
        return axios.get<TrainData[]>(`${API_ENDPOINT}/trains-schedule`);
    }

}

export default new TrainsDataService();