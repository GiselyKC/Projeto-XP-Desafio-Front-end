import React, { useContext } from 'react';
import Context from '../context/MyContext';
import '../css/listaDeAcoes.css';

export default function NomeUsuario() {
  const { email, usuarios } = useContext(Context);

  const filterNome = usuarios.filter((usuario) => usuario.email === email)
    .map(({ nome, sobrenome }) => `${nome} ${sobrenome}`);

  return (
    <div>
      <h3 className="container-nome">{ filterNome }</h3>
    </div>
  );
}
