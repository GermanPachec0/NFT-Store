import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './style.css';
import { CardItem } from '../Card';
import { ItemContext } from '../../providers';

export const CarItemDetail = ({items}) => {

  const {removeItem} = useContext(ItemContext);
  useEffect(()=>{
  },[items])

 
  return (
    <>
      {
      items.map((item,index) => {
        return <>
        <div className='cardItemDetail'>
          <CardItem key={index} item={item}  width = {350} height = {300}><Button id='buttonItem' onClick={()=>removeItem(item.id)} variant="outlined" color="error">Remove</Button></CardItem>
        </div>
          </>
      })

    }
    
    </>
    
  )
}
