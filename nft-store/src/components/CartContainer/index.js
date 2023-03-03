import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../../providers'
import { CarItemDetail } from '../CartItemDetail'
import { DetailCart } from '../DetailCart'
import './style.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
export const CartContainer = () => {

  const {cart} = useContext(ItemContext);
  const [amount,setAmount] = useState(0);  
  const [totalItems,setTotalItems]=useState(0);
  useEffect(()=>{
    let amount = 0;
    let totalItems=0;
    for(let i = 0; i< cart.length;i++){
      amount += cart[i].last_price*cart[i].quantity;
      totalItems += cart[i].quantity;
    }
    setAmount(amount);
    setTotalItems(totalItems);
  },[cart])

  if(cart.length ===0){
    return <>
      <Alert severity="info">
          <AlertTitle>No hay productos en el Carrito</AlertTitle>
          Vaya a la tienda para elegir sus productos <strong><Link to={'/'}>Tienda</Link></strong>
      </Alert>
    </>
  }
  
  return (
    <>
      <div>
        <div className='divLeft wrapper'><CarItemDetail items = {cart}/></div>
        <div className='divRight'><DetailCart amount = {amount} totalItems={totalItems}/></div>
      </div>
    </>
  )
}
