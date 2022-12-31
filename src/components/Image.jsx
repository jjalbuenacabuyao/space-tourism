import React from 'react'

const Image = props => {
  return (
    <picture>
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