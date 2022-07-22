import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/MyContext';
import '../css/login.css';

export default function Login() {
  const navigate = useNavigate();
  const { email, setEmail, usuarios } = useContext(Context);
  const [senhaLogin, setSenhaLogin] = useState('');

  const valueSenha = ({ target: { value } }) => {
    setSenhaLogin(value);
  };

  const habilitarBotao = () => {
    const teste = usuarios.find((usuario) => usuario.email === email).senha;
    if (senhaLogin !== teste) {
      alert('Senha incorreta');
    }
    if (senhaLogin === teste) {
      navigate('/lista-acoes');
    }
  };

  return (
    <div className="container-login">
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
