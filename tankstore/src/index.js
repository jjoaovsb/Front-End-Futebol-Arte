import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Rotas';
import './index.css';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

