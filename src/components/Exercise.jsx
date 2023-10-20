import React from 'react';

function Exercise({ exerciseData }) {
  const { name, sets } = exerciseData;

  return (
    <div className="exercise">
      <h3>{name}</h3>
      <ul>
        {sets.map((set, index) => (
          <li key={index}>
            Set {index + 1}: Weight: {set.weight} lbs, Reps: {set.reps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise;
