function WorkoutItem({excercise}){
    return (
        <li className="break-words border-b border-stone-200 py-3 text-sm">
            {excercise.name}
        </li>
    )
}

export default WorkoutItem;
