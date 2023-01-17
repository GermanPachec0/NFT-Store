import './style.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="btn btn-secondary" href="#">NFT-STORE</a>
                    </div>
                    <ul class="nav justify-content-center gap-5">
                        <li class="nav-item " >
                        <button className='btn btn-dark' href="#" ><span class="material-symbols-outlined ">
                        Home
                        </span><p>INICIO</p> </button>
                            
                        </li>
                        <li class="nav-item">
                            <button className='btn btn-dark' href="#"><span class="material-symbols-outlined">
                            shopping_cart
                            </span> <p>Tienda</p></button>
                        </li>
                        <li class="nav-item">
                            <button className='btn btn-dark' href="#"><span class="material-symbols-outlined">shopping_bag</span> <p>Mis Compras</p></button>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav justify-content-end">
                        <li>
                            <button className='btn btn-dark' href="#" ><span class="material-symbols-outlined">login</span> <p> Sign Up</p></button>
                            <button className='btn btn-dark' href="#" ><span class="material-symbols-outlined">how_to_reg</span><p> Register</p></button>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    );
}

