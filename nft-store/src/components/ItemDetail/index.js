import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../../providers';
import { CardItem } from '../Card';
import { ItemCount } from '../ItemCount';
import Button from '@mui/material/Button';

export const ItemDetail = ({item}) => {
  const {addItem} = useContext(ItemContext);
  const [cantItems,setCanItem] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    item.stock = item.stock - cantItems;
    addItem(item,cantItems);
  }

  return (
    <>
    <div style = {{margin:'20px', textAlign:'center'}}>
      <CardItem item={item} width={600} height={550} ></CardItem>
      <ItemCount setCanItem = {setCanItem} value ={cantItems} stock={item.stock}></ItemCount>
    <form onSubmit={handleSubmit}>
        <Button type='submit' variant="contained" color="success">Comprar</Button>
    </form>
     
    </div>
    </>
  )
}
