import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/hero/Hero';
import Banner from '../common/banner/Banner';

const Home = () => {
    return (
        <Hero>
            <Banner 
                title="luxurious rooms"
                subTitle="deluxe rooms starting at $299"
            >
                <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner>
        </Hero>

    )
}

export default Home;
