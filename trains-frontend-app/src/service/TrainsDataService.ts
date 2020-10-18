import axios from 'axios';
import { TrainData } from '../components/train-schedule/TrainsSchedule';

class TrainsDataService {

    createTrainsSchedule(trainData: TrainData) {
        return axios.post('http://localhost:8080/trains', trainData);
    }

    retrieveAllTainsData() {
        return axios.get<TrainData[]>('http://localhost:8080/trains-schedule');
    }

}

export default new TrainsDataService();