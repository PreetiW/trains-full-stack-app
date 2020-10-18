import React from 'react';
import { useForm } from 'react-hook-form';
import { TrainData } from '../../types/trains.types';
import './TrainsForm.css';



export const TrainsForm = (props: any) => {
    const { register, handleSubmit, errors } = useForm<TrainData>();

    const onSubmit = (data: TrainData) => {
        props.onFormSubmit(data);
    };

    return (
        <section className="container" >
            <p>Fill the the form to add new train schedule</p>
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Train ID:</label>
                    <input type="number" placeholder="Train ID" name="trainId" ref={register({ required: true })} />
                    {errors.trainId && errors.trainId.type === "required" && (
                        <div className="error">Your must enter Train ID.</div>
                    )}
                </div>

                <div className="field">
                    <label>Train Name:</label>
                    <input type="text" placeholder="Train Name" name="trainName" ref={register({ required: true })} />
                    {errors.trainName && errors.trainName.type === "required" && (
                        <div className="error">Your must enter Train Name.</div>
                    )}
                </div>

                <div className="field">
                    <label>Source Station:</label>
                    <input type="text" placeholder="Source Station" name="sourceStation" ref={register({ required: true })} />
                    {errors.sourceStation && errors.sourceStation.type === "required" && (
                        <div className="error">Your must enter Source Station.</div>
                    )}
                </div>

                <div className="field">
                    <label>Destination Station:</label>
                    <input type="text" placeholder="Destination Station" name="destinationStation" ref={register({ required: true })} />
                    {errors.destinationStation && errors.destinationStation.type === "required" && (
                        <div className="error">Your must enter Destination Station.</div>
                    )}
                </div>


                <div className="field">
                    <label>Departure Time:</label>
                    <input type="time" placeholder="Departure Time" name="departureTime" ref={register({ required: true })} />
                    {errors.departureTime && errors.departureTime.type === "required" && (
                        <div className="error">Your must enter Departure Time.</div>
                    )}
                </div>


                <div className="field">
                    <label>Arrival Time:</label>
                    <input type="time" placeholder="Arrival Time" name="arrivalTime" ref={register({ required: true })} />
                    {errors.arrivalTime && errors.arrivalTime.type === "required" && (
                        <div className="error">Your must enter Arrival Time.</div>
                    )}
                </div>

                <div className="field">
                    <label>Total Travel Duration:</label>
                    <input type="text" placeholder="Total Travel Duration" name="totalTravelDuration" ref={register({ required: true })} />
                    {errors.totalTravelDuration && errors.totalTravelDuration.type === "required" && (
                        <div className="error">Your must enter Total Travel Duration.</div>
                    )}
                </div>


                <input type="submit" />
            </form>
        </section>

    );

}

