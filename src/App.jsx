import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Crew, Technology, Destination } from './containers';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={ <Home /> } />
      <Route path='/crew' element={ <Crew /> } />
      <Route path='/destination' element={ <Destination /> } />
      <Route path='/technology' element={ <Technology /> } />
    </Routes>
  )
}

export default App
