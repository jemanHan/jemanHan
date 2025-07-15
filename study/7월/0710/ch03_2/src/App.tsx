import React from 'react';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import logo from './logo.svg';
import './App.css';
import Tailwindcss from './pages/Tailwindcss'
import Color from './pages/Color'
import TextsTest from './pages/TextsTest';

export default function App() {
  return(
      <div>
     <Tailwindcss/>
     <Color/>
    <TextsTest/>
    </div>
  )
}

