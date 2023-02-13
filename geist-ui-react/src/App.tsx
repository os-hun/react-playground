import { Button } from '@geist-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { Dnd } from './Dnd';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Button 
          shadow
          type="success-light"
        >
          Action
        </Button>
        
        <Dnd />
      </div>
    </DndProvider>
  );
}

export default App;
