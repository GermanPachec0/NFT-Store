import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget';
import { DropDownList } from '../DropDownButton';

import './style.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to={'/'}>
                        <img className='img-link' src='https://img.freepik.com/vector-gratis/concepto-token-no-fungible-nft-efecto-luz-neon_1017-36944.jpg?w=826&t=st=1675395709~exp=1675396309~hmac=f63f8eaa1086c16fa16220a2ef76c17949c9da7e86d6a1c106be5746cca0216c'/>
                        </NavLink>
                    </div>
                    <ul className="nav justify-content-center gap-5">
                        <li className="nav-item " >
                        <NavLink to={'/'} className='btn btn-dark'><span className="material-symbols-outlined ">
                        Home
                        </span><p>Home</p> </NavLink>
                            
                        </li>
                        <li className="nav-item">
                                <DropDownList></DropDownList>
                        
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/cart'}>
                                <CartWidget/>
                            </NavLink>
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

