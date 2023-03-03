import React, { useContext, useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './style.css';

import { ItemContext } from '../../providers';
import { itemService } from '../../services/items';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export const ModalForm = () => {
    const MySwal = withReactContent(Swal)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputs,setInputs] = useState({});
    const {cart,setCart} = useContext(ItemContext);
   

    const handleSubmit = (event) =>{
        event.preventDefault();
        itemService.sendOrder(inputs,cart).then( ({id}) => {  
            MySwal.fire({
            title: <strong>Orden de Compra Generada Con Exito con el orden ID: {id}</strong>,
            icon: 'success'
          })
        setCart([])
        });
        setOpen(false);

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


  return (
    <div>
    <Button variant="contained" onClick={handleOpen}>Terminar Compra</Button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
            timeout: 500,
            },
        }}
        >
        <Fade in={open}>
            <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h3">
                Para terminar con tu compra, necesitamos los siguientes Datos:
            </Typography>
            <form className='formularioCompra' onSubmit={handleSubmit}>
                <div>
                    <TextField margin="normal"  fullWidth  label="Email" id="margin-normal" required ={true} type= "email" name='email' value={inputs.email} onChange={handleChange}/>
                    <TextField margin="normal"  fullWidth label="Nombre"  required ={true} type= "text" name='name' value={inputs.nombre} onChange={handleChange}/>
                    <TextField margin="normal"  fullWidth label="Telefono"  required ={true} type= "text" name='phone' value={inputs.telefono} onChange={handleChange}/>
                </div>
                <Button variant="contained"  type='submit'>Comprar</Button>
                <Button variant="outlined" color="error" className='btnCancelarCompra' onClick={()=>{setOpen(false)}}>Cancelar</Button>
            </form>
            </Box>
        </Fade>
        </Modal>
  </div>
  )
}
