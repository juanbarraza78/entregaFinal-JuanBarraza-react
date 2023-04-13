import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const ItemModal = ({ producto }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={producto.url} className="card-img-top" alt={producto.title} />
      <div className="card-body">
        <h3 className="text-center"> {producto.title} </h3>
        <p className="text-center"> Precio: ${producto.price} </p>
        <p className="text-center"> Cantidad: {producto.quantity} </p>
      </div>
      <button
        className="btn btn-danger text-center mt-1"
        onClick={() => removeFromCart(producto.id)}
      >
        Remover del carrito
      </button>
    </div>
  );
};
