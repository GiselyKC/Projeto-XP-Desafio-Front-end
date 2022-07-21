import React from 'react';
import { useNavigate } from 'react-router-dom';
import NomeUsuario from '../components/NomeUsuario';

export default function ComprarOuVender() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ComprarOuVender</h1>
      <NomeUsuario />
      <h2>Comprar/Vender Ação</h2>
      <table border="1">
        <tr>
          <th>Ação</th>
          <th>Quantidade</th>
          <th>Valor (R$)</th>
        </tr>
        <tr>
          <td>AZUL4</td>
          <td>100</td>
          <td>350,00</td>
        </tr>
      </table>
      <div>
        <button type="button">Comprar</button>
        <input type="text" id="text" />
      </div>
      <div>
        <button type="button">Vender</button>
        <input type="text" id="text" />
      </div>
      <button
        type="button"
        onClick={() => navigate('/lista-acoes')}
      >
        Voltar
      </button>
      <button type="button">Confirmar</button>
    </div>
  );
}
