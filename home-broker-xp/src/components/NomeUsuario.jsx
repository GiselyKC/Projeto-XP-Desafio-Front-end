import React, { useContext } from 'react';
import Context from '../context/MyContext';

export default function NomeUsuario() {
  const { email, usuarios } = useContext(Context);

  const filterNome = usuarios.filter((usuario) => usuario.email === email)
    .map(({ nome, sobrenome }) => `${nome} ${sobrenome}`);

  return (
    <div>
      <p>{ filterNome }</p>
    </div>
  );
}
