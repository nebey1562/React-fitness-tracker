import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FitnessContext = createContext();

const FitnessProvider = ({ children }) => {
    const [muscleGroup, setMuscleGroup] = useState('');
    const [exercises, setExercises] = useState({});
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/exercises')
            .then(response => {
                console.log('Fetched exercises:', response.data);
                setExercises(response.data);
            })
            .catch(error => {
                console.error('Error fetching exercises:', error);
            });
    }, []);

    const logWorkout = (exercise, weight, reps) => {
        const newWorkout = { exercise, weight, reps };
        setWorkouts([...workouts, newWorkout]);

        // Save the workout to db.json
        axios.post('http://localhost:3001/workouts', newWorkout)
            .then(response => {
                console.log('Workout logged:', response.data);
            })
            .catch(error => {
                console.error('Error logging workout:', error);
            });
    };

    const selectMuscleGroup = (group) => {
        setMuscleGroup(group);
    };

    return (
        <FitnessContext.Provider value={{
            muscleGroup,
            exercises,
            selectMuscleGroup,
            logWorkout,
            workouts
        }}>
            {children}
        </FitnessContext.Provider>
    );
};

export { FitnessContext, FitnessProvider };
