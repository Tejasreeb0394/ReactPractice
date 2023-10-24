import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header/>
      {/* <Body/> */}
      <Outlet/>
    </div>
  );
}

export default App;
