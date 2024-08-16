import React, { useContext, useState } from 'react';
import { FitnessContext } from './assets/FitnessContext';
import "./Exercise.css";
const WorkoutLogger = () => {
    const { muscleGroup, logWorkout, workouts, exercises } = useContext(FitnessContext);
    const selectedExercises = exercises[muscleGroup] || [];
    const [exerciseName, setExerciseName] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        logWorkout(exerciseName, weight, reps);
        setExerciseName('');
        setWeight('');
        setReps('');
    };

    return (
        <div className='WorkoutLogger'>
            <h2>Log Your Workout</h2>
            <form onSubmit={handleSubmit}>
                <select value={exerciseName} onChange={(e) => setExerciseName(e.target.value)}>
                    <option value="">Select Exercise</option>
                    {selectedExercises.map(exercise => (
                        <option key={exercise.id} value={exercise.name}>
                            {exercise.name}
                        </option>
                    ))}
                </select>
                <br />
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <br />
                <input
                    type="number"
                    placeholder="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Log Workout</button>
            </form>
            <br />
            <h2>Logged Workouts</h2>
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>
                        {workout.exercise} - {workout.weight} kg, {workout.reps} reps
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutLogger;
