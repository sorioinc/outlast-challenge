import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

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
      <Routes>
        <Route path="/books" element={<Books />}>
          <Route path=":id" element={<div />} />
        </Route>

        <Route path="/" element={<Navigate replace to="/books" />} />
      </Routes>
    </div>
  );
};

export default App;
