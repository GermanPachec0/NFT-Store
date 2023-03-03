import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList";
import './styles.css';
export const ItemListContainer = () => {
        const [categeryId,setCategory] = useState();
        const {idCategory} = useParams();

        useEffect(() => {
                     
        },[idCategory])
        
        return (<>
        <div className="divItemList">
                <ItemList  idCategoria={idCategory}/>
        </div>
        </>);
}