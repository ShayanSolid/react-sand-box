import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { Homepage } from './components/Homepage';


function App() {
  return (
  // Header

    // Main
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  // Footer
  );
}

export default App;
