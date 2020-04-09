import React from 'react';
import rooms from './mocks/data';

export const RoomContext = React.createContext();

export default class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }
    componentDidMount() {
        let formatedRooms = this.formatData(rooms);
        console.log(formatedRooms)
    }
    formatData(rooms) {
        let tempRooms = rooms.map(room => {
            let id = room.sys.id;
            let images = room.fields.images.map(image => {
                return image.fields.file.url;
            });
            let tempRoom = {...rooms.fields, images, id}
            return tempRoom;
        })
        return tempRooms;
    }
    render () {
        return (
            <RoomContext.Provider value={'da'}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}