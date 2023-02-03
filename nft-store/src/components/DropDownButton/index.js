import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import './styles.css';


export const DropDownList = () => {
  return (
    <div className='drop-list'>    
        <Dropdown>
        <Dropdown.Toggle className='btn btn-dark dropdown-toggle' data-toggle="dropdown" >
            <span className="material-symbols-outlined">
            shopping_cart
            </span><p>Categorias</p>
        </Dropdown.Toggle>
        <Dropdown.Menu >
            <Dropdown.Item><Link to ={`/category/${1}` } className='link'>Crypto Punks</Link></Dropdown.Item>
            <Dropdown.Item><Link to ={`/category/${2}` }  className='link'>Bored Ape Collection</Link></Dropdown.Item>
            <Dropdown.Item ><Link to ={`/category/${3}` }  className='link'>Cool Cats NFT</Link></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}
