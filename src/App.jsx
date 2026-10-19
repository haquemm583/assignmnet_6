import Header from './components/Header'
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import About from './components/About';
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
          <WorkoutList excercises={excercises}/>
        </>
      ) : (
        <About/>
      )}
    </main>
  );
}

export default App;
