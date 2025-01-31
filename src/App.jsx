import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './style/base.scss'; // Import du fichier Sass
import Home from './pages/home/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      

    </>
  )
}

export default App
