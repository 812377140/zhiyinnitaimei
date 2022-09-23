import React from 'react';
import './App.css';
import '@arco-design/web-react/dist/css/arco.css';
import Home from './home';
import MyInfo from './modules/my-info';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-info" element={<MyInfo />} />
    </Routes>
  );
}

export default App;
