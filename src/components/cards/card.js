import React from "react"
import FormDialog from "../dialog/dialog"

export default function Card(props){
   const [open, setOpen] = React.useState(false);
   const handleClickCard = () => {
    setOpen(true);
   }

   //console.log(`props titulo${props.titulo}`)
   return (
    <>

    <FormDialog open={open} setOpen={setOpen} 
    id={props.id}
    titulo={props.titulo} 
    autor={props.autor} 
    isbn={props.isbn}
    resumo={props.resumo}
    ano_lancamento={props.ano_lancamento}
    listCard={props.listCard}
    setlistCard={props.setlistCard}   />

    <div className="card-container" onClick={() => handleClickCard()}>
           
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
       </>


    )
    
}