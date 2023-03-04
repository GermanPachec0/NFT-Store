import React, { useEffect, useState } from 'react'
import { itemService } from '../../services/items';
import { Item } from '../Item';
import LinearProgress from '@mui/material/LinearProgress';
import './styles.css'

export const ItemList = ({idCategoria}) => {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
      if(idCategoria == undefined)
       {
        itemService.getAll().then(data => setItems(data));
        
       }else{
        itemService.getItemsByCategoryId(parseInt(idCategoria)).then(data => setItems(data));
       }
   
       setLoading(false);

  },[idCategoria])

    useEffect(()=>{if(items.length == 0 ){
      setLoading(true)
    }else{
      setLoading(false);
    }},[items])


  return (
    <> {loading &&  <LinearProgress />}
        <div className="p-2"><Item items={items} /></div>
    </>
      
    
  )
}
