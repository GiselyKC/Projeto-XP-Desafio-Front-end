/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import Context from '../context/MyContext';
import '../css/components.css';

export default function SaldoUsuario() {
  const {contaValor} = useContext(Context);

  return (
    <div>
      <details className="container-saldo-usuario">
        <summary>Mostrar saldo</summary>
        <p>Saldo R$: {contaValor}</p>
      </details>
    </div>
  );
}