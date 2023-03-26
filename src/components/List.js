import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/List.css';

const List = ({ items }) => {
  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default List;
