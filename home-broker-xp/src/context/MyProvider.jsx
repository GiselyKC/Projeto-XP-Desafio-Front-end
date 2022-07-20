import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';
import ApiFake from '../db.json';

function Provider({ children }) {
  const [usuarios, setUsuarios] = useState(ApiFake.usuarios);
  const [acoes, setAcoes] = useState(ApiFake.acoes);
  const [email, setEmail] = useState('');

  const contextValue = useMemo(() => ({
    email,
    setEmail,
    usuarios,
    setUsuarios,
    acoes,
    setAcoes,
  }), [email, usuarios, acoes]);

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
