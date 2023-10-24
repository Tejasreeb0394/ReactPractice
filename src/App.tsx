import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './utils/ReactContext';
import { client } from './utils/GraphQlConnections';
import { ApolloProvider } from '@apollo/client';


function App() {
  return (

    
      <ApolloProvider client={client}>
      <UserProvider>
        <>
          <Header />
          <Outlet />
        </>
      </UserProvider>
      </ApolloProvider>

  );
}

export default App;
