import React from 'react';
import data from '../constants/data.json';

const Home = () => {
  const destination = data.destinations;
  const [ moon ] = destination;
  return (
    <div>
      <p>{ moon.name }</p>
      <img src={ moon.images.png } alt="" />
    </div>
  )
}

export default Home