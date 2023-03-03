import { getFirestore,doc,getDoc,collection,getDocs,query, where, addDoc, updateDoc } from "firebase/firestore";

const getAll = async () => {
    const dbFirestore = getFirestore();
    const itemsCollection = collection(dbFirestore,"items");
    const snapshot = await getDocs(itemsCollection);
    
    const items = snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}));
    return items
}

const getItemsByCategoryId = async (id) =>{
  
    const dbFirestore = getFirestore();
    const itemsCollection = collection(dbFirestore,'items');

    const q = query(
        itemsCollection,
        where('categoryId','==', id)
    );
    const snapshot = await getDocs(q);

    const items =  snapshot.docs.map((doc) => ({id:doc.id,...doc.data()}));
    return items;
}

const getItemById = async (id) =>{
    const dbFirestore = getFirestore();

    const itemDoc = doc(dbFirestore,"items",id);
    const snapshot = await getDoc(itemDoc);
     return  {id:snapshot.id,...snapshot.data()};

}   

const sendOrder = (user,cart) => {
    let totalE = 0;
    const db = getFirestore();

    cart.forEach(element => {
        getItemById(element.id).then((data) =>{ const orderDoc = doc(db,"items",data.id)
        updateDoc(orderDoc, {stock : data.stock - element.quantity})

        totalE += element.last_price * element.quantity;
    })});
    const order = {
        buyer: user,
        items: parseOrder(cart),
        total: totalE
    }
 
    const ordersCollection = collection(db,"order");
    return addDoc(ordersCollection,order);
   

}

const parseOrder = (cart) => {
    const myOrder = [];
    cart.forEach(element => {
        myOrder.push({id:element.id,last_price:element.last_price,title:element.name})
});
return myOrder;
}


export const itemService = {getAll,getItemsByCategoryId,getItemById,sendOrder}
