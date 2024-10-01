"use client";

import { useState } from 'react';

export default function VoteList() {
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`CPF submetido: ${cpf}`);
    setCpf(''); // Limpa o campo de CPF após a submissão
  };

  return (
    <div>
      <h1>Digite seu CPF</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite seu CPF"
          required
        />
        <button type="submit">Submeter</button>
      </form>
    </div>
  );
}

