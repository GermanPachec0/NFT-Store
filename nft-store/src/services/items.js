import {inhabitants } from "../data/inhabitants"

const getAll = () => {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(inhabitants );
            },[1000])
    })
}

const getOneItem = async (id) =>{
  
    const response = inhabitants.filter((item) => (item.category.id == id))

    const data = await response;
    return data;
}


export const itemService = {getAll,getOneItem}
