import React from 'react';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import logo from './logo.svg';
import './App.css';
import Bootstrap from './pages/Bootstrap'
import Icon from './pages/Icon'
import Style from './pages/Style'
import UsingIcon from './pages/UsingIcon'
import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass'
export default function App() {
  return(
      <div>
      <h1 style={{backgroundColor: 'cyan', textAlign: 'center'}}>CSS 스타일링</h1>
      <hr />
    <Bootstrap></Bootstrap>
    <Icon></Icon>
    <UsingIcon></UsingIcon>
    </div>
  )
}
