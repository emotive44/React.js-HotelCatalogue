import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../../context';
import Loading from '../common/Loading';
import Title from '../common/Title';

const RoomsContainer = () => {
  return (
    <RoomContext.Consumer>
      {
        value => {
          const { loading, sortedRooms, rooms } = value;
          
          if(loading) { return <Loading /> }
          return (
            <div>
              <Title title="search rooms"/>
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
