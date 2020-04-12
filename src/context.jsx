import React from 'react';
import rooms from './mocks/data';

export const RoomContext = React.createContext();

export default class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        breakfast: false,
        loading: true,
        pets: false,
        type: "all",
        capacity: 1,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        price: 0,
    }
    componentDidMount() {
        let formatedRooms = this.formatData(rooms);
        let featuredRooms = formatedRooms.filter(room => {
            return room.featured === true;
        });
        let maxPrice = Math.max(...rooms.map(room => room.fields.price));
        let maxSize = Math.max(...rooms.map(room => room.fields.size));
        this.setState({
            maxSize,
            maxPrice,
            featuredRooms,
            loading: false,
            price: maxPrice,
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
    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        this.setState({ [name]: value }, this.filterRooms);
    }
    filterRooms = () => {
        let {
            pets,
            type,
            rooms,
            price,
            minSize,
            maxSize,
            capacity,
            breakfast
        } = this.state;
        
        let tempRooms = [...rooms];
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        
        capacity = parseInt(capacity);
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        price = parseInt(price);
        tempRooms = tempRooms.filter(room => room.price <= price);

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        this.setState({ sortedRooms: tempRooms });
    }
    render () {
        return (
            <RoomContext.Provider 
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}