import React from 'react';

function Workout({ workoutData }) {
  const { date, feelings, exercises } = workoutData;

  return (
    <div className="workout">
      <h2>Workout Details</h2>
      <p>Date: {new Date(date).toDateString()}</p>
      <p>Feelings: {feelings}</p>

      <h3>Exercises:</h3>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.name}</strong>
            <ul>
              {exercise.sets.map((set, setIndex) => (
                <li key={setIndex}>
                  Set {setIndex + 1}: Weight: {set.weight} lbs, Reps: {set.reps}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workout;
