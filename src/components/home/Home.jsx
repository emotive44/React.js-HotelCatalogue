import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Hero from '../common/hero/Hero';
import Banner from '../common/banner/Banner';

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
        </Fragment>
    )
}

export default Home;
