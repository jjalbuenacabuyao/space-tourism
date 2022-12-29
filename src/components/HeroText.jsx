import React from 'react';
import data from '../constants/data.json';

const HeroText = () => {
  const home = data.home;
  return (
    <article>
      <h1 className='uppercase font-barlow-condensed text-base'>
        { home.heading }<span className='font-bellefair'>{ home.highlight }</span>
      </h1>
      <p>{ home.description }</p>
    </article>
  )
}

export default HeroText