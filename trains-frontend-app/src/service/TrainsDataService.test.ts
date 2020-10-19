import TrainsDataService from './TrainsDataService'
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>


it("should fetches successfully trains data from an API", async () => {
    const expectedData = { data: [{ train_id: 1, train_name: "Deccan Express" }] };
    mockedAxios.get.mockResolvedValue(expectedData);
    const actualData = await TrainsDataService.retrieveAllTainsData();
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(actualData).toEqual(expectedData);
})

it("should successfully post trains data to an API", async () => {
    const sampleTrainData = {
        trainId: 1,
        trainName: "Shayadri Express",
        sourceStation: "Pune",
        destinationStation: "Kalyan",
        departureTime: "1:00 PM",
        arrivalTime: '5:00 PM',
        totalTravelDuration: '5hr 30m',
    };
    mockedAxios.post.mockResolvedValue({ id: 1 });
    const actualData = await TrainsDataService.createTrainsSchedule(sampleTrainData);
    expect(mockedAxios.post).toHaveBeenCalled();
    await expect(actualData).toEqual({ id: 1 });
})