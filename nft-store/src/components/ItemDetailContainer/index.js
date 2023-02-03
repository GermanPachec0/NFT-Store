import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { inhabitants } from '../../data/inhabitants';
import { itemService } from '../../services/items';
import { ItemDetail } from '../ItemDetail'

export const ItemDetailContainer = () => {
const [item,setItem] = useState([]);
const { itemId } = useParams();

useEffect(()  => {
 
  setItem( getItem(itemId));
},[item])

function getItem(itemId){
    const item = inhabitants.find((item) => item.id == itemId);
    return item;
}  

  return (
    <div className='col-12 d-flex justify-content-center'>
        <ItemDetail item={item}/>
    </div>
  )
}
