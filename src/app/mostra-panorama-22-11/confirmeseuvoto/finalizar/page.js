"use client";

import { useState, useEffect } from 'react';
import style from './finalizar.module.css';

export default function VoteList() {
  const [cpf, setCpf] = useState('');
  const [votos, setVotos] = useState({ filme1: '', filme2: '', filme3: '' });

  useEffect(() => {
    // Carrega os votos do Local Storage
    const storedVotes = JSON.parse(localStorage.getItem('votos')) || {
      filme1: '',
      filme2: '',
      filme3: ''
    };
    
    setVotos(storedVotes); // Atualiza o estado com os votos resgatados
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/saveVote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf,
          filme1: votos.filme1,
          filme2: votos.filme2,
          filme3: votos.filme3,
        }),
      });

      if (res.ok) {
        alert('Voto submetido com sucesso!');
        setCpf(''); // Limpa o campo de CPF
        setVotos({ filme1: '', filme2: '', filme3: '' }); // Limpa os votos
      } else if (res.status === 409) {
        alert('Esse CPF já votou.');
      } else {
        alert('Erro ao submeter o voto.');
      }
    } catch (error) {
      console.error('Erro ao submeter o voto:', error);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Digite seu CPF</h1>
      <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text" // Mantenha como 'text' para evitar problemas com o maxlength
        value={cpf}
        onChange={(e) => {
          // Filtra apenas números
          const value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
          setCpf(value); // Atualiza o estado do CPF
        }}
        placeholder="Digite seu CPF"
        maxLength="11" // CPF tem 11 dígitos
        required
      />
        <button className={style.button} type="submit">VOTAR</button>
      </form>
    </div>
  );
}
