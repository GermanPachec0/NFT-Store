import React, { useContext } from 'react'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemContext } from '../../providers';
import './styles.css';
import { ModalForm } from '../Modal';


export const DetailCart = ({amount,totalItems}) => {
    const {clear} = useContext(ItemContext);


  return (
    <>
    <div className='detailCart'>
    <CardContent className='cardContextMargin'>
        <Typography variant='h4' color="text.primary" gutterBottom>
                Total a Pagar: {amount} ETH
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
             Total de NFTs: {totalItems}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
        </Typography>
        <Typography variant="body2">
                well meaning and kindly.
                
        </Typography>
        <br></br>
        <div className='terminaCompra'>
                <ModalForm></ModalForm>
                <br></br>
                <Button   onClick={() => clear()}   variant="contained" color="error">Quitar Todos</Button>
        </div>
    </CardContent>

    </div>
    </>
  )
}
