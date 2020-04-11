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
        let featuredRooms = formatedRooms.filter(room => {
            return room.featured === true;
        });
        
        this.setState({
            featuredRooms,
            loading: false,
            rooms: formatedRooms,
            sortedRooms: formatedRooms
        });
    }
    formatData(rooms) {
        let tempRooms = rooms.map(room => {
            let id = room.sys.id;
            let images = room.fields.images.map(image => {
                return image.fields.file.url;
            });
            let tempRoom = {...room.fields, images, id}
            return tempRoom;
        })
        return tempRooms;
    }
    getRoom = (id) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === id);
        return room;
    }
    render () {
        return (
            <RoomContext.Provider 
                value={{
                    ...this.state,
                    getRoom: this.getRoom
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}