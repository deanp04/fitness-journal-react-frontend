import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const LogWorkoutPage = () => {
  const [workout, setWorkout] = useState({
    date: '',
    feelings: '',
  });

  const [exercise, setExercise] = useState({
    name: '',
  });

  const [set, setSet] = useState({
    weight: 0,
    reps: 0,
  });

  const navigate = useNavigate();

  const handleWorkoutChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleExerciseChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSetChange = (e) => {
    setSet({ ...set, [e.target.name]: e.target.value });
  };

  const handleWorkoutSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/workouts', workout);
    navigate('/');
  };

  const handleExerciseSubmit = async (e) => {
    e.preventDefault();
    // Send exercise data to the backend and associate it with the current workout.
    // You'll need to adjust the API endpoint to handle this.
  };

  const handleSetSubmit = async (e) => {
    e.preventDefault();
    // Send set data to the backend and associate it with the current exercise.
    // You'll need to adjust the API endpoint to handle this.
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleWorkoutSubmit}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleWorkoutChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Feelings</Form.Label>
          <Form.Control as="textarea" rows={3} name="feelings" onChange={handleWorkoutChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Workout
        </Button>
      </Form>

      <Form onSubmit={handleExerciseSubmit}>
        {/* Exercise form fields go here */}
        <Button variant="primary" type="submit">
          Add Exercise
        </Button>
      </Form>

      <Form onSubmit={handleSetSubmit}>
        {/* Set form fields go here */}
        <Button variant="primary" type="submit">
          Add Set
        </Button>
      </Form>
    </Container>
  );
};

export default LogWorkoutPage;