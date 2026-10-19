import Header from './components/layout/Header'
import WorkoutForm from './components/workouts/WorkoutForm';
import WorkoutList from './components/workouts/WorkoutList';
import About from './components/about/About';
import { useState } from 'react';


function App(){

  const [view, setView] = useState("workouts")
  const [exercises, setExercises] = useState([])
  function addWorkout(name, reps, weight){
    const newWorkout = {
      id: crypto.randomUUID(),
      name: name,
      reps: reps,
      weight: weight,
    }
    setExercises((previousExercises) => [
      ...previousExercises,
      newWorkout,
    ])
  }
  function deleteWorkout(id){
    setExercises((previousExercises) => previousExercises.filter((exercise) => exercise.id !== id))
  }
  function clearWorkouts(){
    setExercises([])
  }
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-20">
      <Header title="Workout Tracker"/>
      <nav className="mb-8 mt-8 flex gap-6 border-b border-stone-200">
        <button className={`cursor-pointer border-b-2 pb-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${view === "workouts" ? "border-stone-800 text-stone-900" : "border-transparent text-stone-500 hover:text-stone-800"}`} onClick={() => setView("workouts")}>
          Workout Log
        </button>
        <button className={`cursor-pointer border-b-2 pb-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 ${view === "about" ? "border-stone-800 text-stone-900" : "border-transparent text-stone-500 hover:text-stone-800"}`} onClick={() => setView("about")}>
          About
        </button>
      </nav>
      {view ==="workouts" ? (
        <>
          <WorkoutForm onAddWorkout={addWorkout}/>
          <WorkoutList exercises={exercises} onDeleteWorkout={deleteWorkout} onClearWorkouts={clearWorkouts}/>
        </>
      ) : (
        <About/>
      )}
    </main>
  );
}

export default App;
