"use client";


import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Prevote } from '@/app/components/prevote/prevote';

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
                {!votos ? (
                    
                    <p>Nenhum voto foi registrado.</p>

                ) : (

                    <ul>
                        <li>Filme 1: {votos.filme1}</li>
                        <li>Filme 2: {votos.filme2}</li>
                        <li>Filme 3: {votos.filme3}</li>
                        <Prevote
                            title={"O DIA QUE TE CONHECI"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme1}
                        />
                        <Prevote
                            title={"ESTRANHO CAMINHO"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme2}
                        />
                        <Prevote
                            title={"QUANDO EU ME ENCONTRAR"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme3}
                        />

                    </ul>
                )}
               </div>
            
               </main>
          </>
)}