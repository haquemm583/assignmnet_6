function WorkoutItem({exercise, onDeleteWorkout}){
    return (
        <li className="flex items-center justify-between gap-4 border-b border-stone-200 py-3 text-sm">
            <div className="min-w-0 break-words">
            <p className="font-medium">{exercise.name}</p>
            <p className="mt-1 text-stone-500">{exercise.reps} reps · {exercise.weight === 0 ? 'Bodyweight' : `${exercise.weight} lb`}</p>
            </div>
            <button className="shrink-0 cursor-pointer rounded-md px-2 py-1 text-stone-500 hover:bg-stone-100 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2" type="button" aria-label={`Delete ${exercise.name}`} onClick={() => onDeleteWorkout(exercise.id)}>Delete</button>
        </li>
    )
}

export default WorkoutItem;
