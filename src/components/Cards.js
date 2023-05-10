import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <Link to='/information' className='social-logo'>
              <h2>Featured Signs</h2>
              <i class="fa-solid fa-sign-hanging" />
            </Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sign1.jpg'
              text='Thai Chill '
              label='3D Letters'
              path='/services'
            />
            <CardItem
              src='/images/sign2.jpg'
              text='Priri Piri Grill'
              label='Neon'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sign3.jpg'
              text='Posh Frox'
              label='3D Letters'
              path='/services'
            />
            <CardItem
              src='/images/sign4.jpg'
              text='Nail Salon'
              label='Widow Sign'
              path='/products'
            />
            <CardItem
              src='/images/sign5.jpg'
              text='Al-Falah'
              label='Shop Sign'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
