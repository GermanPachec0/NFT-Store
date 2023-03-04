import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './styles.css';


export const DropDownList = ({categories}) => {
  return (

    <div className='drop-list'>    
        <Dropdown>
        <Dropdown.Toggle className='btn btn-dark dropdown-toggle' data-toggle="dropdown" >
            <span className="material-symbols-outlined">
            shopping_cart
            </span><p>Categorias</p>
        </Dropdown.Toggle>
        <Dropdown.Menu >
            {
              categories=="" ?     <Box sx={{ display: 'flex' }}><CircularProgress /></Box> :
              categories.map(category => {
                return <>
                <Dropdown.Item><Link to ={`/category/${category.key}` } className='link'>{category.name}</Link></Dropdown.Item>
                </>
              })
            }
            
    
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}
