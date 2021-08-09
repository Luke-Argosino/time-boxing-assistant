import React from 'react';
import './App.css';
import Header from './Header';
import TimeboxForm from './pages/TimeboxForm';
import Timebox from './pages/Timebox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Body">
          <Switch>
            <Route exact path="/">
              <TimeboxForm />
            </Route>
            <Route>
              <Timebox />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;