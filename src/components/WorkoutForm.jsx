import { useState } from "react";;

function WorkoutForm({onAddWorkout}){
    const [excercise, setExcercise] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!excercise.trim()) return;
        onAddWorkout(excercise.trim())
        setExcercise('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-sm font-medium" htmlFor="excercise">Exercise name</label>
        <div className="flex flex-col gap-3 sm:flex-row">
        <input
        className="min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm placeholder:text-stone-400 focus:border-stone-600 focus:outline-2 focus:outline-offset-2 focus:outline-stone-400"
        id="excercise"
        type="text"
        placeholder="e.g. Squats"
        value={excercise}
        onChange={(event) => setExcercise(event.target.value)}
        required
        />
        <button className="cursor-pointer rounded-md bg-stone-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600" type="submit">Add exercise</button>
        </div>
        </form>
        
    )
}

export default WorkoutForm; 
