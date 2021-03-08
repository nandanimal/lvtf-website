import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {GetInvolved, About, Home} from './pages';

import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/get-involved" exact component={GetInvolved} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
