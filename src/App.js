import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Fridges from './pages/Fridges';

import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fridges" exact component={Fridges} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
