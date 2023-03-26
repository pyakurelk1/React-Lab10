import React from 'react';
import './styles/Container.css';
import './styles/List.css';
import './styles/Selector.css';
import Container from './components/Container';
import List from './components/List';
import Selector from './components/Selector';

function App() {
  const [selectedList, setSelectedList] = React.useState('List 1');
  const lists = {
    'List 1': ['Item 1', 'Item 2', 'Item 3'],
    'List 2': ['Item A', 'Item B', 'Item C'],
    'List 3': ['Thing 1', 'Thing 2', 'Thing 3']
  };

  return (
    <Container>
      <Selector
        options={Object.keys(lists)}
        selectedOption={selectedList}
        onOptionSelect={(e) => setSelectedList(e.currentTarget.value)}
      />
      <List items={lists[selectedList]} />
    </Container>
  );
}

export default App;
