
import { Input } from "../Input";
import React , { useState } from "react";
import Button from '@mui/material/Button';

export const ItemCount = () =>{

    let [value,setAddValue] = useState(0)
    const stock = 10;

    let isActive = false;

    return( 
    <>
    <div style={{margin:'20px'}}>
        <Button variant="outlined" color="error" onClick ={ () => { (value > 0)? setAddValue(value - 1): value=0 }}>-</Button>
        <input type="text" value ={value}/>
        <Button variant="contained" color="secondary"  onClick ={() => {(value < stock)? setAddValue(value + 1) : isActive = true}} disabled={isActive}>+</Button>
            <p></p>
            <Button variant="contained" color="success">
            Agregar al carrito
            </Button>
    </div>
    </>
    );
}