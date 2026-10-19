import { useEffect, useState } from "react";

function WorkoutForm({onAddWorkout}){
    const [exercise, setExercise] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => setMessage(''), 2500)
        return () => clearTimeout(timer)
    }, [message])

    function handleSubmit(event) {
        event.preventDefault();
        if (!exercise.trim()) return;
        onAddWorkout(exercise.trim(), Number(reps), Number(weight))
        setExercise('')
        setReps('')
        setWeight('')
        setMessage('Exercise added.')
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="exercise">Exercise name</label>
        <input
        className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm placeholder:text-stone-400 focus:border-stone-600 focus:outline-2 focus:outline-offset-2 focus:outline-stone-400"
        id="exercise"
        type="text"
        maxLength={60}
        placeholder="e.g. Squats"
        value={exercise}
        onChange={(event) => {
            setExercise(event.target.value)
            setMessage('')
        }}
        required
        />
        </div>
        <div className="grid grid-cols-2 gap-3">
        <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="reps">Reps</label>
        <input
        className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm focus:border-stone-600 focus:outline-2 focus:outline-offset-2 focus:outline-stone-400"
        id="reps"
        type="number"
        min="1"
        step="1"
        value={reps}
        onChange={(event) => setReps(event.target.value)}
        required
        />
        </div>
        <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="weight">Weight (lb)</label>
        <input
        className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm focus:border-stone-600 focus:outline-2 focus:outline-offset-2 focus:outline-stone-400"
        id="weight"
        type="number"
        min="0"
        step="any"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        required
        />
        </div>
        </div>
        <button className="cursor-pointer rounded-md bg-stone-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600" type="submit">Add exercise</button>
        <p className="min-h-5 text-sm text-stone-600" role="status">{message}</p>
        </form>
        
    )
}

export default WorkoutForm; 
