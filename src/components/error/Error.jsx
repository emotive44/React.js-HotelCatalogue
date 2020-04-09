import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../common/Hero';
import Banner from '../common/Banner';

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subTitle="page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error;
