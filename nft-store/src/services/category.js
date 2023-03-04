import { getFirestore,collection,getDocs } from "firebase/firestore";

const getAll = async () =>{
    const dbFirestore = getFirestore();
    const itemsCollection = collection(dbFirestore,"categories");
    const snapshot = await getDocs(itemsCollection);
    
    const categories = snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}));
    return categories
};


export const categoryService = {getAll}