export const CartWidget = ({items}) => {
    return <>
        <button className='btn btn-dark'><span className="material-symbols-outlined">shopping_bag</span><p> Mis Compras ({items})</p></button>
    </>
}