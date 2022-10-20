import React from "react"


export default function Card(props){
   
   console.log(`props titulo${props.titulo}`)
   return (
        
    <div className="card-container">
           
           <h2>{props.titulo}</h2>

           <div className="input-field">
               <p>Autor: {props.autor} </p>
               <div className="underline"></div>
           </div>

           <div className="input-field">
               <p>ISBN: {props.isbn} </p>
               <div className="underline"></div>
           </div>

           <div className="input-field">
               <p>Resumo: {props.resumo} </p>
               <div className="underline"></div>
           </div>

           <div className="input-field">
               <p className="ultimo-item">Ano de Lançamento:{props.ano_lancamento} </p>
               <div className="underline"></div>
           </div>

       </div>



    )
    
}