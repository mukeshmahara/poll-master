import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main';
import CreatePoll from './components/CreatePoll';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Main}/>
        <Route path="/create" exact component={CreatePoll}/>
      </div>
    </Router>
  );
}

export default App;
