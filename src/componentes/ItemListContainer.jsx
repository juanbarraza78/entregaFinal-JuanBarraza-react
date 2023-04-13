import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { OrderForms } from "./OrderForms";

const ItemListContainer = () => {

  const [productos, setProductos] = useState()

  useEffect(() => {
    const db =getFirestore()
    const refCollection = collection(db, "items")

    getDocs(refCollection).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }
      setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
    
  }, [])
  

  return (
    <div>
      <ItemList productos={productos}/>
      <OrderForms productos ></OrderForms>
    </div>
  );
};

export default ItemListContainer;
