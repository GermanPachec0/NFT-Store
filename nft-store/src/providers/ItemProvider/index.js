import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemContext = createContext();


export const ItemProvider = ({children}) => {

 const [itemsPurchase,setItemsPurchase] = useState({});
 const [quantity,setQuantity] = useState(0);
 const [cart, setCart] = useState([]);
 const [cantItems,setCanItems] = useState();
 const MySwal = withReactContent(Swal)

useEffect(() =>{
  setCanItems(cart.length);
},[cart]);

 const addItem = (item,quantity) => {
  const cartItem = {...item,quantity};
  if(!isInCart(item) && quantity != 0 ){
    setCart([...cart,cartItem])
    MySwal.fire({
      title: <strong>NFT Agregado con exito!</strong>,
      icon: 'success'
    })
  }else{
    MySwal.fire({
      title: <strong>No es posible agregar el NFT</strong>,
      icon: 'error'
    })
    
  }
  
 }



 const removeItem = (id) =>{
  setCart((current) => current.filter((item) => item.id != id))
  
}
 const clear = () =>{
  setCart([]);
 };

const isInCart = (item) => {
    const inCart = cart.find((c) => c.id == item.id);
    if(inCart == null || inCart == '' || inCart == undefined) {
      return false
    }
    return true;
}
  return (
        <ItemContext.Provider value={{itemsPurchase,setItemsPurchase,setQuantity,quantity,addItem,cantItems,cart,removeItem,clear,setCart}}>
            {children}
        </ItemContext.Provider>
  )
}
