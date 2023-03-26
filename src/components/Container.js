import React, { useState } from 'react';
import List from './List';
import Selector from './Selector';
import '../styles/Container.css';

const Container = () => {
  const [selectedList, setSelectedList] = useState('fruits');
  const lists = {
    fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
    vegetables: ['Carrot', 'Broccoli', 'Spinach', 'Cucumber'],
  };

  const handleListChange = (event) => {
    setSelectedList(event.target.value);
  };

  return (
    <div className="container">
      <h1>Lists</h1>
      <Selector handleListChange={handleListChange} />
      <List items={lists[selectedList]} />
    </div>
  );
};

export default Container;