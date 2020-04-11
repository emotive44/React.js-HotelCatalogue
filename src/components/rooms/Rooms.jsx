import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/Hero';
import Banner from '../common/Banner';
import RoomsContainer from './RoomsContainer';
import RoomsFilter from './RoomsFilter';

const Rooms = () => {
  return (
    <Fragment>
        <Hero hero="roomsHero">
        <Banner title="our rooms" >
          <Link to="/" className="btn-primary">return home</Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  )
}

export default Rooms;
