import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ListaDeAcoes from './Pages/ListaDeAcoes';
import NotFound from './Pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/lista-acoes" element={<ListaDeAcoes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
