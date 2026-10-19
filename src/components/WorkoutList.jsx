import WorkoutItem from './WorkoutItem';

function WorkoutList({excercises}){
    return (
        <section className="mt-8">
            <h2 className="mb-3 text-xl font-medium">Your exercises</h2>
            {excercises.length === 0 ? (
                <p className="text-sm text-stone-500">No exercises added yet.</p>
            ) : (
                <ul>
                    {excercises.map((excercise) => (
                        <WorkoutItem key={excercise.id} excercise={excercise}/>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default WorkoutList;
