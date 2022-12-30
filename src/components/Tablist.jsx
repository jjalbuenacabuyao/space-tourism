import React from 'react'

const Tablist = props => {
  const buttonStyle = "font-barlow-condensed uppercase tracking-[2.36px] pb-3";
  return (
    <li>
      <button 
      onClick={() => props.setter(props.planet)} className={`${buttonStyle} ${props.active == props.planet ? "border-b-[3px] border-b-off-white" : ""}`} 
      >{props.planet.name}</button>
    </li>
  )
}

export default Tablist