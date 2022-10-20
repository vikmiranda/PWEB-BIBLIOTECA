import './App.css';
import React, { useState, useEffect} from 'react';
import Axios from "axios";
import Card from './components/cards/card';


function App() {
    
    const [listLivros, setListLivros] = useState();
    const [values, setValues] = useState();
    const handleChangeValues = (value) => {
        setValues((prevValue) =>({
            ...prevValue,
            [value.target.name]: value.target.value,

        }));
        console.log(values)
    };

    const handleClickButton = () =>{
        Axios.post("https://biblioteca-pweb-server.herokuapp.com/livros/cadastrar-livro", {
            titulo: values.titulo,
            autor:  values.autor,
            isbn:   values.isbn,
            resumo: values.resumo,
            ano_lancamento: values.ano_lancamento,
        }).then((response) => {
            console.log(response);
        });
    };

    useEffect(()=>{
        Axios.get("https://biblioteca-pweb-server.herokuapp.com/livros").then((response)=>{
            setListLivros(response.data);
        });
    
    }, []);

    
    return (
        <main className="container">
    
            <h2>Cadastrar Livro</h2>
            <form action="">
                <div className="input-field">
                    <input type="text" name="titulo" id="username" 
                        placeholder="Título do Livro" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="autor" id="password"
                        placeholder="Autor do Livro" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="isbn" id=""
                        placeholder="Isbn" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div> 

                <div className="input-field">
                    <input type="text" name="resumo" id=""
                        placeholder="Resumo" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="input-field">
                    <input type="text" name="ano_lancamento" id=""
                        placeholder="Ano de Lançamento" onChange ={handleChangeValues}/>
                    <div className="underline"></div>
                </div>

                <div className="div-button">
                    <button className='button-sub'  onClick={() => handleClickButton()} > Cadastrar</button>
                </div>
                
            </form>

        
        
        {typeof listLivros !== "undefined" && 
        listLivros.map((value) => {
       
           return <Card 
                    key={value._id}
                    listCard ={listLivros} 
                    setlistCard={setListLivros}
                    id={value.id}
                    titulo = {value.titulo}
                    autor = {value.autor}
                    isbn = {value.isbn}
                    resumo = {value.resumo}
                    ano_lancamento = {value.ano_lancamento}
                    ></Card>;
        }
        
        )}
 
          
        

</main>
    
  );
}

    
  export default App;