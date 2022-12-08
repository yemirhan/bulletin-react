import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './containers/Homepage'
import { Layout } from './containers/Layout'

function App() {

  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
    </Route>
  </Routes> 
  )
}

export default App