import Header from './components/Header'
import WorkoutForm from './components/WorkoutForm';
import { useState } from 'react';


function App(){

  const [view, setView] = useState("workouts")
  const [excercises, setExcercises] = useState([])
  function addWorkout(name){
    const newWorkout = {
      id: crypto.randomUUID(),
      name: name,
    }
    setExcercises((previousExcercises) => [
      ...previousExcercises,
      newWorkout,
    ])
  }
  return (
    <main>
      <Header title="Workout Tracker"/>
      <nav>
        <button onClick={() => setView("workouts")}>
          Workout Log
        </button>
        <button onClick={() => setView("progress")}>
          Progress
        </button>
      </nav>
      {view ==="workouts" ? (
        <WorkoutForm onAddWorkout={addWorkout}/>
      ) : (
        <p>Your Progress will appear here</p>
      )}
    </main>
  );
}

export default App;