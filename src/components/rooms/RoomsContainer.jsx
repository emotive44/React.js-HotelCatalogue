import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../../context';
import Loading from '../common/Loading';

const RoomsContainer = () => {
  return (
    <RoomContext.Consumer>
      {
        value => {
          const { loading, sortedRooms, rooms } = value;
          
          if(loading) { return <Loading /> }
          return (
            <div>container
              <RoomsFilter rooms={rooms}/>
              <RoomsList rooms={sortedRooms}/>
            </div>
          )
        }
      }
    </RoomContext.Consumer>
  )
}

export default RoomsContainer;
