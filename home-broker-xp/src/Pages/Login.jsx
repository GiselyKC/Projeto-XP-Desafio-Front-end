import React, { useContext, useState } from 'react';
import Context from '../context/MyContext';

export default function Login() {
  const { setEmail } = useContext(Context);
  const [senha, setSenha] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        name="senha"
        placeholder="senha"
        onChange={({ target: { value } }) => setSenha({ senha: value })}
      />
      <button type="button">
        Acessar
      </button>
    </div>
  );
}
