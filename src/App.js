import React from 'react';
import './App.css';
import Header from './Header';
import TimeboxForm from './pages/TimeboxForm';
import Timebox from './pages/Timebox';

export default function App() {
  return (
    <div className="App">
      <Header />
      <TimeboxForm />
    </div>
  );
}

