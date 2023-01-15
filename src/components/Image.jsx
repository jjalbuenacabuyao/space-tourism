import React from 'react'

const Image = props => {
  return (
    <picture className={`w-full ${props.border === "true" ? "border-b-[1px] border-b-off-white lg:border-b-0" : ""} ${props.order}`}>
      <source srcSet={props.webpSrc} />
        <source srcSet={props.pngSrc} />
        <img
          src={props.pngSrc}
          alt={props.alt}
          className={props.className}
        />
    </picture>
  )
}

export default Image