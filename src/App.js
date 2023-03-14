import React from 'react';
import Navbar from "./component/Header";
import Meme from './component/Meme';
import "./Navbar.css";
// import logo from './logo.svg';
import './App.css';

export default function App() {
  return(
    <div>
      <Navbar />
      <Meme />
    </div>
  )
}