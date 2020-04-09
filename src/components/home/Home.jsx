import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Hero from '../common/Hero';
import Banner from '../common/Banner';
import FeaturedRooms from './FeaturedRooms';

const Home = () => {
    return (
        <Fragment>
            <Hero>
                <Banner 
                    title="luxurious rooms"
                    subTitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </Fragment>
    )
}

export default Home;
