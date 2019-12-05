import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main';
import CreatePoll from './components/CreatePoll';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/create" exact component={CreatePoll} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
