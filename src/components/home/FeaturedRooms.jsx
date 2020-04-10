import React from 'react';
import { RoomContext } from '../../context';
import Loading from '../common/Loading';
import Title from '../common/Title';
import Room from './Room';
import '../styles/FeaturedRooms.css'

export default class FeaturedRooms extends React.Component {
    static contextType = RoomContext;
    render () {
        const { featuredRooms, loading } = this.context;
        const rooms = featuredRooms.map(room => <Room key={room.id} {...room}/>)
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    { loading ? <Loading /> : rooms }
                </div>
            </section>
        )
    }
}