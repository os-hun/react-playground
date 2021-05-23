import { Button, Pagination } from '@geist-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button 
        shadow
        type="success-light"
      >
        Action
      </Button>
      
      <Pagination count={20} initialPage={3} />
    </div>
  );
}

export default App;
