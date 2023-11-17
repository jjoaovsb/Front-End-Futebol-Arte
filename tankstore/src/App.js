import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './App.css';
import banner2 from "./img/banner2.png";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCleared, setCartCleared] = useState(false);
  const history = useHistory(); 

  useEffect(() => {
    const data = [
      { id: 1, Nome: 'Camisa 1', Descrição: 'Descrição da Camisa 1', Preço: 50.0 },
      { id: 2, Nome: 'Camisa 2', Descrição: 'Descrição da Camisa 2', Preço: 50.0 },
      { id: 3, Nome: 'Camisa 3', Descrição: 'Descrição da Camisa 3', Preço: 30.0 },
      { id: 4, Nome: 'Camisa 4', Descrição: 'Descrição da Camisa 4', Preço: 25.0 },
      { id: 5, Nome: 'Camisa 5', Descrição: 'Descrição da Camisa 5', Preço: 40.0 },
      { id: 6, Nome: 'Camisa 6', Descrição: 'Descrição da Camisa 6', Preço: 60.0 },
    ];
    setProducts(data);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.Preço, 0);
    return total.toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
    setCartCleared(true);
    setTimeout(() => {
      setCartCleared(false);
    }, 3000);
  };

  const handleCheckout = () => {
    setCart([]);
    history.push("/Tela"); // Redirecionamento para a página "Tela"
  };

  return (
    <div className="App">
      <header>
        <h1>Futebol Arte</h1>
        <img src={banner2} alt="banner black friday" title="banner black friday" />
      </header>
      <main>
        <section id="produtos">
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product">
                <h3>{product.Nome}</h3>
                <p>{product.Descrição}</p>
                <p>R$ {product.Preço.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        </section>
        <section id="carrinho">
          <h2>Carrinho</h2>
          <div className="cart">
            {cartCleared ? (
              <p>Seu carrinho foi limpo!</p>
            ) : (
              <div>
                <ul>
                  {cart.map(item => (
                    <li key={item.id}>{item.Nome} - R$ {item.Preço.toFixed(2)}</li>
                  ))}
                </ul>
                <p>Total: R$ {calculateTotal()}</p>
                <button onClick={handleCheckout}>Finalizar Compra</button>
                <button onClick={clearCart}>Limpar Carrinho</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div className="info-contato">
          <p>Endereço: Rua João Silva, 317, Itabira MG</p>
          <p>Telefone: (99) 99897-5689</p>
          <p>E-mail: futebolarte@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;