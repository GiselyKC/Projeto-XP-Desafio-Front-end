/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';
import ApiFake from '../db.json';

function Provider({ children }) {
  const [usuarios, setUsuarios] = useState(ApiFake.usuarios);
  const [acoes, setAcoes] = useState(ApiFake.acoes);
  const [email, setEmail] = useState('');
  const [infoBotao, setInfoBotao] = useState('');
  const [CVUsuario, setCVUsuario] = useState([]);
  const [CVAcao, setCVAcao] = useState([]);
  const [valorAcao, setValorAcao] = useState('');
  const [contaValor, setContaValor] = useState(0);

  const contextValue = useMemo(() => ({
    email,
    setEmail,
    usuarios,
    setUsuarios,
    acoes,
    setAcoes,
    infoBotao,
    setInfoBotao,
    CVUsuario,
    setCVUsuario,
    CVAcao,
    setCVAcao,
    valorAcao,
    setValorAcao,
    contaValor,
    setContaValor,
  }), [email, usuarios, acoes, infoBotao, CVUsuario, CVAcao, valorAcao, contaValor]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
