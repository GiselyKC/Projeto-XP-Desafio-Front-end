import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';

export default function ComprarOuVender() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    email,
    usuarios,
    acoes,
    infoBotao,
    CVUsuario,
    setCVUsuario,
    CVAcao,
    setCVAcao,
  } = useContext(Context);
  const [valorBotao, setValorBotao] = useState('');
  const [valorInput, setValorInput] = useState('');

  const btnConfirmar = () => {
    if (valorBotao === '') {
      alert('Deve informar se é compra ou venda');
    }
    if (valorInput === '') {
      alert('Deve informar o valor');
    }
    if (infoBotao === 'acaoUsuario') {
      usuarios.find((usuario) => usuario.email === email).minhasAcoes
        .filter((user) => user.id === Number(id)).map((acaoId) => (
          setCVUsuario([...CVUsuario, {
            id: acaoId.id,
            nomeAcao: acaoId.nomeAcao,
            preco: acaoId.preco,
            quantidade: acaoId.quantidade,
            input: valorInput,
            btn: valorBotao,
          }])
        ));
    }
    if (infoBotao === 'acaoDisponivel') {
      acoes.filter((acao) => acao.id === Number(id))
        .map((acaoId) => (
          setCVAcao([...CVAcao, {
            id: acaoId.id,
            nomeAcao: acaoId.nomeAcao,
            preco: acaoId.preco,
            quantidade: acaoId.quantidade,
            input: valorInput,
            btn: valorBotao,
          }])
        ));
    }
    navigate('/lista-acoes');
  };

  return (
    <div>
      <h1>ComprarOuVender</h1>
      <NomeUsuario />
      <h2>Comprar/Vender Ação</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {
          infoBotao === 'acaoUsuario'
            ? (
              usuarios.find((usuario) => usuario.email === email).minhasAcoes
                .filter((user) => user.id === Number(id)).map((acaoId) => (
                  <tr key={acaoId.id}>
                    <td>{acaoId.nomeAcao}</td>
                    <td>{acaoId.quantidade}</td>
                    <td>{acaoId.preco}</td>
                  </tr>
                ))
            )
            : (
              acoes.filter((acao) => acao.id === Number(id))
                .map((acaoId) => (
                  <tr key={acaoId.id}>
                    <td>{acaoId.nomeAcao}</td>
                    <td>{acaoId.quantidade}</td>
                    <td>{acaoId.preco}</td>
                  </tr>
                ))
            )
          }
        </tbody>
      </table>
      <div>
        <button
          type="button"
          value="btnComprar"
          onClick={({ target: { value } }) => setValorBotao(value)}
        >
          Comprar
        </button>
        <input
          type="text"
          placeholder="Informe o valor"
          onChange={({ target: { value } }) => setValorInput(value)}
        />
      </div>
      <div>
        <button
          type="button"
          value="btnVender"
          onClick={({ target: { value } }) => setValorBotao(value)}
        >
          Vender
        </button>
        <input
          type="text"
          placeholder="Informe o valor"
          onChange={({ target: { value } }) => setValorInput(value)}
        />
      </div>
      <button
        type="button"
        onClick={() => navigate('/lista-acoes')}
      >
        Voltar
      </button>
      <button
        type="button"
        onClick={btnConfirmar}
      >
        Confirmar
      </button>
    </div>
  );
}
