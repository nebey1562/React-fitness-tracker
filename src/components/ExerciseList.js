import React, { useContext } from 'react';
import { FitnessContext } from './assets/FitnessContext';
import "./Exercise.css";

const ExerciseList = () => {
    const { muscleGroup, exercises } = useContext(FitnessContext);
    const selectedExercises = exercises[muscleGroup] || [];

    return (
        <div className='ExerciseList'>
            <h2>Exercises for {muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1)}</h2>
            <ul>
                {selectedExercises.length > 0 ? (
                    selectedExercises.map(exercise => (
                        <li key={exercise.id}>{exercise.name}</li>
                    ))
                ) : (
                    <p>Please select muscle group</p>
                )}
            </ul>
        </div>
    );
};

export default ExerciseList;
