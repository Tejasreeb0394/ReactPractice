import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './utils/ReactContext';


function App() {
  return (

    <div className="App">
      <UserProvider>
        <>
          <Header />
          <Outlet />
        </>
      </UserProvider>
    </div>
  );
}

export default App;
