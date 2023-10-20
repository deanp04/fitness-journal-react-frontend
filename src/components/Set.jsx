import React from 'react';

function Set({ setData }) {
  const { weight, reps } = setData;

  return (
    <div className="set">
      <p>Weight: {weight} lbs</p>
      <p>Reps: {reps}</p>
    </div>
  );
}

export default Set;
