import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/MyContext';
import NomeUsuario from '../components/NomeUsuario';
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
  } = useContext(Context);

  useEffect(() => {
    setInfoBotao('');
  }, []);

  return (
    <div className="container-lista-acoes">
      <NomeUsuario />
      <div className="container-tabelas">
        <div>
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
                usuarios.find((usuario) => usuario.email === email).minhasAcoes
                  .map(({
                    id, nomeAcao, preco, quantidade,
                  }) => (
                    <tr key={id}>
                      <td>{nomeAcao}</td>
                      <td>{quantidade}</td>
                      <td>{preco}</td>
                      <td>
                        <button
                          type="button"
                          value="acaoUsuario"
                          onClick={() => {
                            navigate(`/comprar-vender/${id}`);
                            setInfoBotao('acaoUsuario');
                          }}
                        >
                          C / V
                        </button>
                      </td>
                    </tr>
                  ))
              }
              {
                CVUsuario.map((CV) => (
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
              }
              {
                CVAcao.map((CV) => (
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
              }
            </tbody>
          </table>
        </div>
        <div>
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
        <button
          className="btn-lista-acoes"
          type="button"
          onClick={() => navigate('/deposito-retirada')}
        >
          Depósito / Retirada
        </button>
      </div>
    </div>
  );
}
