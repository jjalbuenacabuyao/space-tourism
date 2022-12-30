import React from 'react'

const HeroContainer = props => {
  return (
    <main className={`${props.px} ${props.pb} ${props.bg} bg-center bg-cover bg-no-repeat bg-fixed min-h-screen pt-20 flex flex-col`}>
      { props.children }
    </main>
  )
}

export default HeroContainer