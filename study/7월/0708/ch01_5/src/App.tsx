import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as D from './data'
import { Component } from 'react';
import ClassComponent from './ClassComponent';
import ArrowComponent  from './ArrowComponent';
import Onclick from './pages/OnClick';

export default function App() {
  return (
    <ul>
      <ArrowComponent href="http://www.google.com" text = "google"/>
      <ClassComponent href="http://www.naver.com" text = "naver"/>
      <Onclick/>
    </ul>
  )
}
