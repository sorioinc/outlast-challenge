import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

import { BooksRoute } from './features/books';

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
        <Route path="/books/*" element={<BooksRoute />} />
        <Route path="/" element={<Navigate replace to="/books" />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
