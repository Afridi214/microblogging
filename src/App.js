import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navber';
import AddUser from './components/user/AddUser';
import ViewProfile from './components/user/ViewProfile';
import Profile from './components/Profile';
import Timeline from './components/user/Timeline';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/view" component={ViewProfile} />
          <Route exact path="/user/timeline" component={Timeline} />
        </switch>
      </Router>
     
      
    </div>
  );
}

export default App;
