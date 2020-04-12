import React, { useContext } from 'react';
import { RoomContext } from '../../context';
import Loading from '../common/Loading';
import Title from '../common/Title';
import Room from '../common/Room';
import '../styles/FeaturedRooms.css';

const FeaturedRooms = () => { 
    const value = useContext(RoomContext);
    const { featuredRooms, loading } = value;
    const rooms = featuredRooms.map(room => <Room key={room.id} {...room}/>)
    
    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                { loading ? <Loading /> : rooms }
            </div>
        </section>
    );
}

export default FeaturedRooms;
