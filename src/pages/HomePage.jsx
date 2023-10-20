import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/workouts');
        setWorkouts(res.data);
      } catch (error) {
        console.error("Error fetching workouts", error);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/workouts/${id}`);
      setWorkouts(workouts.filter((workout) => workout._id !== id));
    } catch (error) {
      console.error("Error deleting workout", error);
    }
  };

  return (
    <Container>
      <Row>
        {workouts.map((workout) => (
          <Col md={4} className="mb-4" key={workout._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{workout.date}</Card.Title>
                <Card.Text>Feelings: {workout.feelings}</Card.Text>
                <Link to={`/workouts/${workout._id}`}>
                  <Button variant="primary" className="mr-2">View Details</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(workout._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
