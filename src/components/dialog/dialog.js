import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    titulo: props.titulo,
    autor: props.autor,
    isbn: props.isbn,
    resumo: props.resumo,
    ano_lancamento: props.ano_lancamento,

  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  // PUT AQUI
  const handleEditLivro = () => {
    //console.log(`props.id aqui >>>>> ${editValues.id}  titulo: ${editValues.titulo}`)
    Axios.put(`https://biblioteca-pweb-server.herokuapp.com/livros/${editValues.id}`, {
      titulo: editValues.titulo,
      autor: editValues.autor,
      isbn: editValues.isbn,
      resumo: editValues.resumo,
      ano_lancamento: editValues.ano_lancamento,
    });
    handleClose();
  };

  //DELETE AQUI
  const handleDeleteLivro = () => {
    Axios.delete(`https://biblioteca-pweb-server.herokuapp.com/livros/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="titulo"
            label="Título"
            defaultValue={props.titulo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="autor"
            label="Autor"
            defaultValue={props.autor}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="isbn"
            label="ISBN"
            defaultValue={props.isbn}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />  
          <TextField
            autoFocus
            margin="dense"
            id="resumo"
            label="Resumo"
            defaultValue={props.resumo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="ano_lancamento"
            label="Ano de Lançamento"
            defaultValue={props.ano_lancamento}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteLivro()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditLivro()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}