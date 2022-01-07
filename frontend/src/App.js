import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useToken from './components/RoastableService/useToken';

import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';
import "@fontsource/rowdies";
import "@fontsource/harmattan";


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Landing setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
