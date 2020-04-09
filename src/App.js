import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Error from './components/error/Error'
import Rooms from './components/rooms/Rooms'
import Navbar from './components/navbar/Navbar'
import SingleRoom from './components/rooms/SingleRoom'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rooms' component={Rooms}/>
        <Route path='/rooms/:id' component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </Fragment>
  );
}

export default App;
