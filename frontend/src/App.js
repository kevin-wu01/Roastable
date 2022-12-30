import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useToken from './hooks/useToken';

import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import CoffeeShopMenu from './pages/CoffeeShop/CoffeeShopMenu/CoffeeShopMenu';

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
