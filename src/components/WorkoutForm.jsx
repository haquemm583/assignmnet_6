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
        <label htmlFor="excercise">Excercise Name</label>
        <input
        id="excercise"
        type="text"
        value={excercise}
        onChange={(event) => setExcercise(event.target.value)}
        required
        />
        <button type="submit">Add Excercise</button>
        </form>
        
    )
}

export default WorkoutForm; 