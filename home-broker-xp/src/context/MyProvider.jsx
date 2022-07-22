import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';
import ApiFake from '../db.json';

function Provider({ children }) {
  const [usuarios, setUsuarios] = useState(ApiFake.usuarios);
  const [acoes, setAcoes] = useState(ApiFake.acoes);
  const [email, setEmail] = useState('');
  const [infoBotao, setInfoBotao] = useState('');
  const [CVUsuario, setCVUsuario] = useState([{
    id: 0,
    nomeAcao: '',
    preco: '',
    quantidade: 0,
    input: 0,
    btn: '',
  }]);
  const [CVAcao, setCVAcao] = useState([{
    id: 0,
    nomeAcao: '',
    preco: '',
    quantidade: 0,
    input: 0,
    btn: '',
  }]);

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
  }), [email, usuarios, acoes, infoBotao, CVUsuario, CVAcao]);

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
