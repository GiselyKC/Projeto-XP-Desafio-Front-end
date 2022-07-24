import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';
import SaldoUsuario from '../components/SaldoUsuario';
import '../css/listaDeAcoes.css';

export default function ListaDeAcoes() {
  const navigate = useNavigate();
  const {
    email,
    usuarios,
    acoes,
    setInfoBotao,
    CVUsuario,
    CVAcao,
    setValorAcao,
  } = useContext(Context);

  useEffect(() => {
    setInfoBotao('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const infoAcoesUsuarioEmail = usuarios.find((usuario) => usuario.email === email).minhasAcoes;

  const CVUsuarioAcaoFiltrado = [...infoAcoesUsuarioEmail, ...CVUsuario, ...CVAcao]
    .reduce((acc, CVUsuarioInfo) => {
      const novoAcc = acc.filter(({ id }) => id !== CVUsuarioInfo.id);
      return [...novoAcc, CVUsuarioInfo];
    }, []);

  return (
    <div className="container-lista-acoes">
      <NomeUsuario />
      <SaldoUsuario />
      <div className="container-tabelas">
        <div className="tabela-usuario-acao">
          <h3 className="title-lista-acoes">Minhas Ações:</h3>
          <table>
            <thead>
              <tr>
                <th>Ação</th>
                <th>Qtde</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
            </thead>
            <tbody>
              {
                CVUsuarioAcaoFiltrado.map((CV) => (
                  <tr key={CV.id}>
                    <td>{CV.nomeAcao}</td>
                    <td>{CV.quantidade}</td>
                    <td>{CV.preco}</td>
                    <td>
                      <button
                        type="button"
                        value="acaoUsuario"
                        onClick={() => {
                          navigate(`/comprar-vender/${CV.id}`);
                          setInfoBotao('acaoUsuario');
                          setValorAcao(CV.preco);
                        }}
                      >
                        C / V
                      </button>
                    </td>
                  </tr>
                ))
              }
              {/* {
                CVAcaoOrganizado.map((CV) => (
                  <tr key={CV.id}>
                    <td>{CV.nomeAcao}</td>
                    <td>{CV.quantidade}</td>
                    <td>{CV.preco}</td>
                    <td>
                      <button
                        type="button"
                        value="acaoUsuario"
                        onClick={() => {
                          navigate(`/comprar-vender/${CV.id}`);
                          setInfoBotao('acaoUsuario');
                        }}
                      >
                        C / V
                      </button>
                    </td>
                  </tr>
                ))
              } */}
            </tbody>
          </table>
        </div>
        <div className="tabela-usuario-acao">
          <h3 className="title-lista-acoes">Disponíveis para investir:</h3>
          <table>
            <thead>
              <tr>
                <th>Ação</th>
                <th>Qtde</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
            </thead>
            <tbody>
              {
                acoes.map((acao) => (
                  <tr key={acao.id}>
                    <td>{acao.nomeAcao}</td>
                    <td>{acao.quantidade}</td>
                    <td>{acao.preco}</td>
                    <td>
                      <button
                        type="button"
                        value="acaoDisponivel"
                        onClick={() => {
                          navigate(`/comprar-vender/${acao.id}`);
                          setInfoBotao('acaoDisponivel');
                        }}
                      >
                        C
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="container-btn-lista-acoes">
          <button
            className="btn-sair"
            type="button"
            onClick={() => navigate('/')}
          >
            Sair
          </button>
          <button
            className="btn-lista-acoes"
            type="button"
            onClick={() => navigate('/deposito-retirada')}
          >
            Depósito / Retirada
          </button>
        </div>
      </div>
    </div>
  );
}
