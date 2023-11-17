
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Tela from './Tela';

const Rotas = () => {
  return (
    <Switch>
      <Route path="/Tela" component={Tela} />
      <Route path="/" exact component={App} />
    </Switch>
  );
};

export default Rotas;
