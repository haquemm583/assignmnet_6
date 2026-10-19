function About(){
    return (
        <section className="space-y-3">
            <h2 className="text-xl font-medium">About</h2>
            <p className="leading-relaxed text-stone-600">Workout Tracker keeps your exercises, rep counts, and weights together in a simple workout log.</p>
            <p className="leading-relaxed text-stone-600">Enter an exercise name, the number of reps, and the weight in pounds. Use 0 for bodyweight exercises.</p>
            <p className="leading-relaxed text-stone-600">Your log stays available when switching between views, but resets when you refresh the page.</p>
        </section>
    )
}

export default About;
