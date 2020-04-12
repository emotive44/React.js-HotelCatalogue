import React, { useContext } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../../context';
import Loading from '../common/Loading';
import Title from '../common/Title';

const RoomsContainer = () => {
  const value = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = value;

  return (
    loading 
      ? <Loading />
      : (
        <div>
          <Title title="search rooms"/>
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>
        </div>
      )
  );
}

export default RoomsContainer;
