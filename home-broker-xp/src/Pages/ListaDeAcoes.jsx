import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';

export default function ListaDeAcoes() {
  const navigate = useNavigate();
  const { acoes } = useContext(Context);

  return (
    <div>
      <h1>ListaDeAcoes</h1>
      <NomeUsuario />
      <div>
        <h2>Minhas Ações</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Quantidade</th>
              <th>Valor (R$)</th>
              <th>Negociar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>nomeAcao</td>
              <td>quantidade</td>
              <td>precoAcao</td>
              <td>
                <button type="button">C</button>
                <button type="button">V</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Disponíveis para investir</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Ação</th>
              <th>Quantidade</th>
              <th>Valor (R$)</th>
              <th>Negociar</th>
            </tr>
          </thead>
          <tbody>
            {
              acoes.map((acao) => (
                <tr key={acao.id}>
                  <td>{acao.nomeAcao}</td>
                  <td>1</td>
                  <td>{acao.preco}</td>
                  <td>
                    <button type="button">C</button>
                    <button type="button">V</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => navigate('/deposito-retirada')}
      >
        Depósito/Retirada
      </button>
    </div>
  );
}
