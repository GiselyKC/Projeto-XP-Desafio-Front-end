import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';
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
    if (contaValor <= 0 && valueBotao === 'botaoRetirada') {
      toast.error('Saldo insuficiente para retirada');
      setContaValor(contaValor - contaValor);
      return;
    }
    if (valueBotao === '') {
      toast.error('Deve selecionar as opções de Deposito ou Retirada');
      return;
    } if (inputValor === '') {
      toast.error('Insira um valor');
    }
    if (valueBotao === 'botaoDeposito') {
      setContaValor(contaValor + Number(inputValor));
    } if (valueBotao === 'botaoRetirada') {
      setContaValor(contaValor - Number(inputValor));
    }
  };

  return (
    <div className="container-deposito-retirada">
      <Toaster />
      <NomeUsuario />
      <div className="container-saldo">
        <p>Saldo em Conta:</p>
        <p>{`R$ ${contaValor}`}</p>
      </div>
      <div className="container-btn-deposito-retirada">
        <button
          className={valueBotao === 'botaoDeposito' ? 'btn-deposito-retirada-selecionado' : 'btn-deposito-retirada'}
          type="button"
          value="botaoDeposito"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Depósito
        </button>
        <button
          className={valueBotao === 'botaoRetirada' ? 'btn-deposito-retirada-selecionado' : 'btn-deposito-retirada'}
          type="button"
          value="botaoRetirada"
          onClick={({ target: { value } }) => setValueBotao(value)}
        >
          Retirada
        </button>
      </div>
      <label className="label-deposito-retirada" htmlFor="input-deposito-retirada">
        R$:
        <input
          className="input-deposito-retirada"
          type="text"
          id="input-deposito-retirada"
          placeholder="Informe o Valor"
          onChange={({ target: { value } }) => setInputValor(value)}
        />
      </label>
      <div className="container-btn-confirmar-voltar">
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
