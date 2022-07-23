import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ListaDeAcoes from './Pages/ListaDeAcoes';
import ComprarOuVender from './Pages/ComprarOuVender';
import DepositoOuRetirada from './Pages/DepositoOuRetirada';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/lista-acoes" element={<ListaDeAcoes />} />
      <Route path="/comprar-vender/:id" element={<ComprarOuVender />} />
      <Route path="/deposito-retirada" element={<DepositoOuRetirada />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
