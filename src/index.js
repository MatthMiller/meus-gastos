import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './Pages/Home/Home';
import DataContext from './Contexts/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContext>
    <Home />
  </DataContext>
);
