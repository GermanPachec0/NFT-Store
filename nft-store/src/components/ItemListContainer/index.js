import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
        const [categeryId,setCategory] = useState();
        const {idCategory} = useParams();

        useEffect(() => {
                     
        },[idCategory])
        
        return (<>
                <ItemList  idCategoria={idCategory}/>
        </>);
}