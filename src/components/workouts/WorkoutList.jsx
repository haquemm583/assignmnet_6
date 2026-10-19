import WorkoutItem from './WorkoutItem';

function WorkoutList({exercises, onDeleteWorkout, onClearWorkouts}){
    return (
        <section className="mt-8">
            <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-medium">Your exercises</h2>
                    <p className="mt-1 text-sm text-stone-500">{exercises.length} {exercises.length === 1 ? 'exercise' : 'exercises'}</p>
                </div>
                {exercises.length > 0 && (
                    <button className="shrink-0 cursor-pointer rounded-md px-2 py-1 text-sm text-stone-500 hover:bg-stone-100 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2" type="button" onClick={onClearWorkouts}>Clear all</button>
                )}
            </div>
            {exercises.length === 0 ? (
                <p className="text-sm text-stone-500">No exercises added yet.</p>
            ) : (
                <ul>
                    {exercises.map((exercise) => (
                        <WorkoutItem key={exercise.id} exercise={exercise} onDeleteWorkout={onDeleteWorkout}/>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default WorkoutList;
