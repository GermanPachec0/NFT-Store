import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail';
import { itemService } from '../../services/items';


export const ItemDetailContainer = () => {

const [item,setItem] = useState([]);
const { itemId } = useParams();
useEffect(()  => {
  itemService.getItemById(itemId).then(data => setItem(data));
},[itemId])
  return (
    <div className='col-12 d-flex justify-content-center'>
        <ItemDetail item={item} />
    </div>
  )
}
