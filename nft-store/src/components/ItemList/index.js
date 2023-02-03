import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { itemService } from '../../services/items';
import { Item } from '../Item';

export const ItemList = ({idCategoria}) => {
  const [items,setItems] = useState([]);

  useEffect(()=>{
      if(idCategoria == undefined)
       {
        itemService.getAll().then((data) => setItems(data))
       }else{
        itemService.getOneItem(idCategoria).then((data) => setItems(data));
       }
   
      
  },[idCategoria])

 

  return (
    
    <div className="p-2"><Item items={items} /></div>
    
  )
}
