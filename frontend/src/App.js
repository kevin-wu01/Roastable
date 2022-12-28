import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useToken from './services/RoastableService/useToken';

import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import CoffeeShopMenu from './components/CoffeeShop/CoffeeShopMenu';

import './App.css';
import '@fontsource/rowdies';
import '@fontsource/harmattan';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Landing setToken={setToken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/coffeeshop" element={<CoffeeShopMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//
export default App;
