import React from 'react';
import data from '../constants/data.json';

const HeroText = () => {
  const home = data.home;
  return (
    <article className='text-center'>
      <h1 className='uppercase font-barlow-condensed text-base text-heading leading-[3em] tracking-[2.7px]'>
        { home.heading }<br /><span className='font-bellefair text-highlight tracking-0 leading-[1.3em]'>{ home.highlight }</span>
      </h1>
      
      <p>{ home.description }</p>
    </article>
  )
}

export default HeroText