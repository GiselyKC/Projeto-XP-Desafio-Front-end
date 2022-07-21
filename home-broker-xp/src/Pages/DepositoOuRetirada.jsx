import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NomeUsuario from '../components/NomeUsuario';
import Context from '../context/MyContext';

export default function DepositoOuRetirada() {
  const navigate = useNavigate();
  const { email, usuarios } = useContext(Context);
  const [valor, setValor] = useState(0);
  const [valueBotao, setValueBotao] = useState('');

  const filterConta = usuarios.filter((usuario) => usuario.email === email)
    .map(({ conta }) => conta);

  return (
    <div>
      <h1>DepositoOuRetirada</h1>
      <NomeUsuario />
      <div>
        <p>Saldo em Conta:</p>
        <p>{`R$ ${filterConta}`}</p>
      </div>
      <div>
        <button
          type="button"
          value="botaoDeposito"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Depósito
        </button>
        <button
          type="button"
          value="botaoRetirada"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Retirada
        </button>
      </div>
      <input
        type="text"
        id="text"
        placeholder="Informe o Valor"
        onChange={({ target: { value } }) => setValor(value)}
      />
      <div>
        <button
          type="button"
          onClick={() => navigate('/lista-acoes')}
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={botaoConfirmar}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
