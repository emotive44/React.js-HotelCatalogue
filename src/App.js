import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Error from './components/error/Error'
import Rooms from './components/rooms/Rooms'
import Navbar from './components/navbar/Navbar'
import SingleRoom from './components/single-room/SingleRoom'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <Fragment>
      <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/rooms' component={Rooms}/>
            <Route path='/rooms/:id' component={SingleRoom}/>
            <Route component={Error}/>
          </Switch>
        </ScrollToTop>
    </Fragment>
  );
}

export default App;
