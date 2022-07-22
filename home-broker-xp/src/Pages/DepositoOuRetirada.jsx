import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NomeUsuario from '../components/NomeUsuario';
import Context from '../context/MyContext';
import '../css/depositoOuRetirada.css';

export default function DepositoOuRetirada() {
  const navigate = useNavigate();
  const { email, usuarios } = useContext(Context);
  const [valueBotao, setValueBotao] = useState('');
  const [inputValor, setInputValor] = useState('');
  const [contaValor, setContaValor] = useState(0);

  useEffect(() => {
    usuarios.filter((usuario) => usuario.email === email)
      .map(({ conta }) => setContaValor(conta));
  }, []);

  const botaoConfirmar = () => {
    if (valueBotao === 'botaoDeposito') {
      setContaValor(contaValor + Number(inputValor));
    } if (valueBotao === 'botaoRetirada') {
      setContaValor(contaValor - Number(inputValor));
    } if (valueBotao === '') {
      alert('Deve selecionar as opções de Deposito ou Retirada');
    } if (contaValor <= 0 && valueBotao === 'botaoRetirada') {
      alert('Saldo insuficiente para retirada');
      setContaValor(0);
    }
    return botaoConfirmar;
  };

  return (
    <div className="container-deposito-retirada">
      {/* <h1>DepositoOuRetirada</h1> */}
      <NomeUsuario />
      <div className="container-saldo">
        <p>Saldo em Conta:</p>
        <p>{`R$ ${contaValor}`}</p>
      </div>
      <div className="container-btn-deposito-retirada">
        <button
          className="btn-deposito-retirada"
          type="button"
          value="botaoDeposito"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Depósito
        </button>
        <button
          className="btn-deposito-retirada"
          type="button"
          value="botaoRetirada"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Retirada
        </button>
      </div>
      <input
        className="input-deposito-retirada"
        type="text"
        id="text"
        placeholder="Informe o Valor"
        onChange={({ target: { value } }) => setInputValor(value)}
      />
      <div className="container-btn-deposito-retirada">
        <button
          className="btn-voltar-confirmar"
          type="button"
          onClick={() => navigate('/lista-acoes')}
        >
          Voltar
        </button>
        <button
          className="btn-voltar-confirmar"
          type="button"
          onClick={botaoConfirmar}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
