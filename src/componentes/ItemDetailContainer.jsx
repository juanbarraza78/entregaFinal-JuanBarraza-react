// cuenta con un producto en especifico
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc,getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [productos, setProductos] = useState()

  useEffect(() => {
    const db =getFirestore()
    const ref = doc(db, "items", id)

    getDoc(ref).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }
      setProductos({id: snapshot.id, ...snapshot.data()})
    })
  }, [])

  return <div> {productos && <ItemDetail producto={productos}/>} </div>;
};

export default ItemDetailContainer;
