import React from 'react';
import HeroContainer from './HeroContainer';
import data from '../constants/data.json';
import TabMenu from './TabMenu';

const HeroDestination = () => {
  const heading = data.destinations[0].heading;
  const num = data.destinations[0].num;
  return (
    <HeroContainer px="px-hero" pb="pb-[3.75rem]" bg="bg-dest-mobile">
      <h1 className='text-center uppercase text-base tracking-[2.7px] font-barlow-condensed'><span className='font-bold mr-4' aria-hidden="true">{ num }</span>{ heading }</h1>
      <TabMenu />
    </HeroContainer>
  )
}

export default HeroDestination