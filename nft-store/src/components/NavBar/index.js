import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ItemContext } from '../../providers';
import { categoryService } from '../../services/category';
import { itemService } from '../../services/items';
import { CartWidget } from '../CartWidget';
import { DropDownList } from '../DropDownButton';

import './style.css';

export const Navbar = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        categoryService.getAll().then(data =>setCategories(data));
    },[])
    const {cantItems} = useContext(ItemContext);
   
    return (
        <>
            <nav className="navbar navbar-inverse bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to={'/'}>
                        <img className='img-link' src='https://ih1.redbubble.net/image.3138133548.5112/st,small,507x507-pad,600x600,f8f8f8.jpg'/>
                        </NavLink>
                    </div>
                    <ul className="nav justify-content-center gap-5">
                        <li className="nav-item " >
                        <NavLink to={'/'} className='btn btn-dark'><span className="material-symbols-outlined ">
                        Home
                        </span><p>Home</p> </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <DropDownList categories={categories}></DropDownList>
                        </li>
                        <li className="nav-item">
                               {cantItems == 0 ? '': <NavLink to={'/cart'}><CartWidget items = {cantItems}/> </NavLink>}
                        </li>
                    </ul>
                    <ul className="nav navbar-nav justify-content-end">
                        <li>
                            <button className='btn btn-dark' href="#" ><span className="material-symbols-outlined">login</span> <p> Sign Up</p></button>
                            <button className='btn btn-dark' href="#" ><span className="material-symbols-outlined">how_to_reg</span><p> Register</p></button>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    );
}

