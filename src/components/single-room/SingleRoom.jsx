import React, { Fragment } from 'react';
import Banner from '../common/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../context';
import StyledHero from '../styles/StyledHero';
import '../styles/SingleRoom.css';

export default class SingleRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }

  static contextType = RoomContext;
  componentDidMount () {

  }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.id);
    
    if(!room) {
      return <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    }

    const { 
      name, 
      pets,
      size, 
      price, 
      images,
      extras,
      capacity, 
      breakfast,
      description } = room;
    return (
      <Fragment>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {
              images.map((item, index) => {
                return <img key={index} src={item} alt={name} />
              })
            }
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>information</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}</h6>
              <h6>
                max capacity : {
                  capacity > 1 ? `${capacity} people` : `1 person`
                }
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </Fragment>
    )
  }
}