import React from 'react';
import Room from '../common/Room';
import '../styles/RoomList.css';

const RoomsList = ({ rooms }) => {
console.log(rooms)
    if(rooms.length < 1) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(room => {
                        return <Room key={room.id} {...room} />
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList;
