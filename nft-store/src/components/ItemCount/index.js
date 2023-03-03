import { Input } from "../Input";
import React , { useState } from "react";
import Button from '@mui/material/Button';

export const ItemCount = ({setCanItem,value,stock}) =>{


    let isActive = false;

    return( 
    <>
    <div style={{margin:'20px'}}>
        <Button variant="outlined" color="error" onClick ={ () => { (value > 0)? setCanItem(value - 1): value=0 }}>-</Button>
        <input type="text" value={value}/>
        <Button variant="contained" color="secondary"  onClick ={() => {(value < stock)? setCanItem(value + 1) : isActive = true}} disabled={isActive}>+</Button>
    </div>
    </>
    );
}