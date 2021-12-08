import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import logo from './logo.svg';
import './App.css';

import { Books } from './features/books';

const App = function App() {
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      localStorage.setItem('user', uuidv4());
    }
  }, []);
  return (
    <div className="App">
      <Books />
    </div>
  );
};

export default App;
