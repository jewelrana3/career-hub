import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Bootstrap start deatails</h2>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;