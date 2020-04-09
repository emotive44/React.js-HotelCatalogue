import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/Hero';
import Banner from '../common/Banner';

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms" >
        <Link to="/" className="btn-primary">return home</Link>
      </Banner>
    </Hero>
  )
}

export default Rooms;
