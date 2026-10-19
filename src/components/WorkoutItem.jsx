function WorkoutItem({excercise}){
    return (
        <li className="break-words border-b border-stone-200 py-3 text-sm">
            <p className="font-medium">{excercise.name}</p>
            <p className="mt-1 text-stone-500">{excercise.reps} reps · {excercise.weight} lb</p>
        </li>
    )
}

export default WorkoutItem;
