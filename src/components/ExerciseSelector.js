import React, { useContext } from 'react';
import { FitnessContext } from './assets/FitnessContext';
import './Exercise.css';
const ExerciseSelector = () => {
    const { selectMuscleGroup } = useContext(FitnessContext);

    const handleMuscleGroupChange = (event) => {
        selectMuscleGroup(event.target.value);
    };

    return (
        <div className='ExerciseSelector'>
            <h2>Select Muscle Group</h2>
            <select onChange={handleMuscleGroupChange}>
                <option value="">Select Muscle Group</option>
                <option value="chest">Chest</option>
                <option value="biceps">Biceps</option>
                <option value="triceps">Triceps</option>
                <option value="forearm">Forearm</option>
                <option value="delts">Delts</option>
                <option value="quads">Quads</option>
                <option value="calves">Calves</option>
                <option value="abs">Abs</option>
            </select>
        </div>
    );
};

export default ExerciseSelector;
