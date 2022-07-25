import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';
import SaldoUsuario from '../components/SaldoUsuario';
import '../css/comprarOuVender.css';

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
    valorAcao,
    contaValor,
    setContaValor,
  } = useContext(Context);
  const [valorBotao, setValorBotao] = useState('');
  const [valorInput, setValorInput] = useState('');

  const novoSaldo = () => {
    const valorInputQuantidade = (Number(valorInput) * Number(valorAcao));
    if (valorBotao === 'btnComprar') {
      if (contaValor < valorInputQuantidade) {
        toast.error('Saldo insuficiente');
        return;
      }
      setContaValor(contaValor - valorInputQuantidade);
      return;
    }
    if (valorBotao === 'btnVender') {
      setContaValor(contaValor + valorInputQuantidade);
    }
  }

  const objetoUsuario = () => usuarios.find((usuario) => usuario.email === email).minhasAcoes
    .filter((user) => user.id === Number(id)).map((acaoId) => (
      setCVUsuario([...CVUsuario, {
        id: acaoId.id,
        nomeAcao: acaoId.nomeAcao,
        preco: acaoId.preco,
        quantidade: (valorBotao === 'btnComprar' ? (acaoId.quantidade + Number(valorInput)) : (acaoId.quantidade - Number(valorInput))),
      }])
    ));

  const objetoAcao = () => acoes.filter((acao) => acao.id === Number(id))
    .map((acaoId) => (
      setCVAcao([...CVAcao, {
        id: acaoId.id,
        nomeAcao: acaoId.nomeAcao,
        preco: acaoId.preco,
        quantidade: (valorBotao === 'btnComprar' ? (acaoId.quantidade + Number(valorInput)) : (acaoId.quantidade - Number(valorInput))),
      }])
    ));



  const btnConfirmar = () => {
    if (valorBotao === '') {
      toast.error('Deve selecionar a opção Comprar ou Vender');
      return;
    }
    if (valorInput === '') {
      toast.error('Insira um valor');
      return;
    }
    if (infoBotao === 'acaoUsuario' && valorInput !== '') {
      objetoUsuario();
      novoSaldo();
      toast.success('Realizado com sucesso');
      return;
    }
    if (infoBotao === 'acaoDisponivel' && valorInput !== '') {
      objetoAcao();
      toast.success('Realizado com sucesso');
      novoSaldo();
    }
  };

  return (
    <div className="container-comprar-vender">
      <Toaster />
      <NomeUsuario />
      <SaldoUsuario />
      <div className="container-table-comprar-vender">
        <h3 className="title-comprar-vender">Comprar/Vender Ação:</h3>
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
        <div className="container-btn-input-comprar-vender">
          <div>
            <button
              className={valorBotao === 'btnComprar' ? 'btn-vender-comprar-selecionado' : 'btn-vender-comprar'}
              type="button"
              value="btnComprar"
              onClick={({ target: { value } }) => setValorBotao(value)}
            >
              Comprar
            </button>
            <input
              className="input-comprar-vender"
              type="text"
              placeholder="Informe a quantidade"
              onChange={({ target: { value } }) => setValorInput(value)}
            />
            {
            valorInput !== '' && valorBotao === 'btnComprar'
              ? (
                <p className="valor-ordem">{`Valor da ordem: R$ ${(Number(valorInput) * Number(valorAcao)).toFixed(2)}`}</p>)
              : null
            }
          </div>
          <div>
            <button
              className={valorBotao === 'btnVender' ? 'btn-vender-comprar-selecionado' : 'btn-vender-comprar'}
              type="button"
              value="btnVender"
              onClick={({ target: { value } }) => setValorBotao(value)}
            >
              Vender
            </button>
            <input
              className="input-comprar-vender"
              type="text"
              placeholder="Informe a quantidade"
              onChange={({ target: { value } }) => setValorInput(value)}
            />
            {
            valorInput !== '' && valorBotao === 'btnVender'
              ? (
                <p className="valor-ordem">{`Valor da ordem: R$ ${(Number(valorInput) * Number(valorAcao)).toFixed(2)}`}</p>)
              : null
            }
          </div>
        </div>
      </div>
      <div className="container-btn-confirmar-voltar ">
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
          onClick={btnConfirmar}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
