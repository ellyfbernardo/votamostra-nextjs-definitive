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
                        <>
                            {votos.filme1 == null ? <div></div> : <Prevote 
                            title={"O DIA QUE TE CONHECI"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme1}
                            /> }

                            {votos.filme2 == null ? <div></div> : <Prevote 
                            title={"ESTRANHO CAMINHO"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme2}
                            /> }


                            {votos.filme3 == null ? <div></div> : <Prevote 
                            title={"QUANDO EU ME ENCONTRAR"}
                            description={"FICÇÃO, 70MIN, MG, 2023, 14 ANOS DIREÇÃO ANDRÉ NOVAIS OLIVEIRA"}
                            vote={votos.filme3}
                            /> }
                        </>
                )}
               </div>
            
               </main>
          </>
)}