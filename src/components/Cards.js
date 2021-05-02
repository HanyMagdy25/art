import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Last Designs </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3030.jpg'
              text='Explore planets and space art scenes inspiration'
              label='Space'
              path='/services'
            />
            
            <CardItem
              src='images/4040.jpg'
              text="Don't worry about finding your soul mate"
              label='Edits'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/a3.jpg'
              text='Find out who you are and do it on purpose'
              label='Walls'
              path='/services'
            />
            <CardItem
              src='images/a5.jpg'
              text='Design is a solution to a problem. Art is a question to a problem'
              label='Random'
              path='/products'
            />
            <CardItem
              src='images/a4.jpg'
              text='Sometimes we must lose ourselves to find ourselves.'
              label='3D'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;