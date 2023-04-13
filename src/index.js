import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import CategoryContainer from "./componentes/CategoryContainer";

import CartProvider from "./Context/CartContext";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAarkEKTBwe996otfQ2t4eyruYvCMBRXpQ",
  authDomain: "lila-ecommerce.firebaseapp.com",
  projectId: "lila-ecommerce",
  storageBucket: "lila-ecommerce.appspot.com",
  messagingSenderId: "427739051392",
  appId: "1:427739051392:web:14f5704a1ac0e9601cbd65",
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route
            exact
            path="/categorias/:categoria"
            element={<CategoryContainer />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </CartProvider>
);
