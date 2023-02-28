import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import Login from './pages/login';
import Home from './pages/home';
import stores from './stores';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...stores}>
      <Routes>
        <Route path="/"  element={<Login/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
        <Route path="/home"  element={<Home/>}></Route>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
