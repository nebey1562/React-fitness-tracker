import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FitnessProvider } from './components/assets/FitnessContext';
import Home from './components/Home'; // New Home component
import ExerciseSelector from './components/ExerciseSelector';
import ExerciseList from './components/ExerciseList';
import WorkoutLogger from './components/WorkoutLogger';

const App = () => {
    return (
        <FitnessProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workouts" element={
                        <div className="workouts-page">
                            <ExerciseSelector />
                            <ExerciseList />
                            <WorkoutLogger />
                        </div>
                        } />
                </Routes>
            </Router>
        </FitnessProvider>
    );
};

export default App;
