import React from 'react'

const NumberedHeading = props => {
  return (
    <h1 className='text-center uppercase text-base tracking-[2.7px] font-barlow-condensed'><span className='font-bold mr-4' aria-hidden="true">{ props.num }</span>{ props.text }</h1>
  )
}

export default NumberedHeading