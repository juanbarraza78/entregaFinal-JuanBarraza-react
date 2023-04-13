import React, { useEffect, useState } from 'react'
import Category from './Category';
import {collection, getDocs, getFirestore} from "firebase/firestore";

const CategoryContainer = () => {

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
    <Category productos={productos}></Category>
    
  )
}

export default CategoryContainer
