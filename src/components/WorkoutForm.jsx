import { useState } from "react";;

function WorkoutForm({onAddWorkout}){
    const [excercise, setExcercise] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!excercise.trim()) return;
        onAddWorkout(excercise.trim(), Number(reps), Number(weight))
        setExcercise('')
        setReps('')
        setWeight('')
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="excercise">Exercise name</label>
        <input
        className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm placeholder:text-stone-400 focus:border-stone-600 focus:outline-2 focus:outline-offset-2 focus:outline-stone-400"
        id="excercise"
        type="text"
        placeholder="e.g. Squats"
        value={excercise}
        onChange={(event) => setExcercise(event.target.value)}
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
        </form>
        
    )
}

export default WorkoutForm; 
