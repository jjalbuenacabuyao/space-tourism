import React from 'react'

const HeroContainer = props => {
  return (
    <main className={`${props.px} ${props.pb} min-h-screen pt-20 flex flex-col`}>
      { props.children }
    </main>
  )
}

export default HeroContainer