import React from 'react';
import Title from '../common/title/Title';
import { services } from '../../mocks/services';
import './Services.css';

const Services = () =>{
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center"> 
        {
          services.map((item, idx) => {
            return <article key= {idx} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })
        }
      </div>
    </section>
  )
}

export default Services;
