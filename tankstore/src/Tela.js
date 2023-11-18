import React, { useState } from 'react';
import './Tela.css';
import testee from "./img/testee.png";


function Tela() {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  const handleCreateAccount = () => {
    console.log('Criar Conta');
  };

  return (
    <div className="Tela">
      <header className="tela-header">
      <h1>22242</h1>
      <img src={testee} alt="Logo" title="Logo "/>
      </header>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button type="button" onClick={handleLogin}>
              Entrar
            </button>
            <button type="button" onClick={handleCreateAccount}>
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tela;