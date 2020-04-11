import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Room.css'

const Room = (props) => {
    const { name, slug, images, price } = props;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

export default Room;
