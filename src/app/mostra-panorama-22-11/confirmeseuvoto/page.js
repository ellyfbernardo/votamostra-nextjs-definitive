"use client";


import Link from 'next/link';


import { useEffect, useState } from 'react';
export default function Confirmeseuvoto(){
     

     const [votos, setVotos] = useState(null);

     useEffect(() => {
         const votosArmazenados = localStorage.getItem('votos');
         if (votosArmazenados) {
             setVotos(JSON.parse(votosArmazenados));
         }
     }, []);

     return( 
          <>
               <main>

               <div>
               <h1>Resultados da Votação</h1>
               {votos ? (
                <ul>
                    <li>Filme 1: {votos.filme1}</li>
                    <li>Filme 2: {votos.filme2}</li>
                    <li>Filme 3: {votos.filme3}</li>
                </ul>
               ) : (
                <p>Nenhum voto foi registrado.</p>
               )}
               </div>
               

                    <Link href="/mostra-panorama-22-11">
                    <h2>EDITAR SEU VOTO</h2>
                    </Link>



               </main>
          </>
)}