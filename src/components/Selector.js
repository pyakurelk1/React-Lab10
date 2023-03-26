import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/Selector.css';

const Selector = ({ handleListChange }) => {
  return (
    <Form>
      <Form.Group controlId="listSelector" className="form-group">
        <Form.Label className="form-label">Select a list:</Form.Label>
        <Form.Control as="select" onChange={handleListChange} className="form-control">
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Selector;
