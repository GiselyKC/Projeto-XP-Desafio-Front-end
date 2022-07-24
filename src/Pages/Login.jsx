/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Context from '../context/MyContext';
import '../css/login.css';

export default function Login() {
  const navigate = useNavigate();
  const { email, setEmail, usuarios, setContaValor } = useContext(Context);
  const [senhaLogin, setSenhaLogin] = useState('');

  const valueSenha = ({ target: { value } }) => {
    setSenhaLogin(value);
  };

  const habilitarBotao = () => {
    const teste = usuarios.find((usuario) => usuario.email === email).senha;
    if (senhaLogin !== teste) {
      toast.error('Senha incorreta');
    }
    if (senhaLogin === teste) {
      navigate('/lista-acoes');
    }
    usuarios.filter((usuario) => usuario.email === email)
    .map(({ conta }) => setContaValor(conta));
  };

  return (
    <div className="container-login">
      <Toaster />
      <div className="container-input-login">
        <input
          className="input-login"
          type="text"
          name="email"
          placeholder="email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input
          className="input-login"
          type="password"
          name="senha"
          placeholder="senha"
          onChange={valueSenha}
        />
      </div>
      <button
        type="button"
        className="btn-login"
        onClick={habilitarBotao}
      >
        Acessar
      </button>
    </div>
  );
}
