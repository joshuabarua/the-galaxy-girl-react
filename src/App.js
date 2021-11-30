import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/index/index';
import Resume from './pages/resume/index';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/resume' exact component={Resume} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
    
  );
}

export default App;
