import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;