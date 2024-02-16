// index.js veya App.js gibi ana bileşen dosyanız
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter ekledik
import App from './App'; // Ana bileşeninizi içe aktardık

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
