"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import style from './finalizar.module.css';

function formatCPF(cpf) {
  const cleaned = cpf.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }
  return cleaned;
}

export default function VoteList() {
  const [cpf, setCpf] = useState('');
  const [votos, setVotos] = useState(null);

  useEffect(() => {
    const votosArmazenados = localStorage.getItem('votos');
    if (votosArmazenados) {
      setVotos(JSON.parse(votosArmazenados));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`CPF submetido: ${cpf} \n Votos: \n Filme 1: ${votos?.filme1}\n Filme 2: ${votos?.filme2}\n Filme 3: ${votos?.filme3}`);
    setCpf(''); // Limpa o campo de CPF após a submissão
  };

  const handleChange = (e) => {
    const formattedCPF = formatCPF(e.target.value);
    setCpf(formattedCPF);
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Digite seu CPF</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={cpf}
          onChange={handleChange}
          placeholder="Digite seu CPF"
          maxLength="14" // Limita o tamanho para o formato 000.000.000-00
          required
        />
        <button className={style.button} type="submit">VOTAR</button>
      </form>
      <Link href="/">Voltar para tela inicial</Link>
    </div>
  );
}
