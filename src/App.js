import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import CartProvider from './context/cartContext';
import Cart from './components/Cart';



function App() {
  return (
    <CartProvider defaultCart={[]}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" title="Productos Disponibles">
          <div className="App-header">
            <ItemListContainer />
          </div>
        </Route>
        <Route exact path="/category/:categoryId" title="Productos Disponibles">
          <div className="App-header">
            <ItemListContainer />
          </div>
        </Route>
        <Route exact path="/item/:itemId" title="Detalle de Producto">
          <div className="App-header">
            <ItemDetailsContainer />
          </div>
        </Route>
        <Route exact path="/Cart" title="Detalle de Producto">
          <div className="App-header">
            <Cart />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
