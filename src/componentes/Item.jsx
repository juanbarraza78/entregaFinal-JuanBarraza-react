import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={producto.url} className="card-img-top" alt={producto.title} />
      <div className="card-body">
        <h3 className="text-center"> {producto.title} </h3>
        <p className="text-center"> Precio: ${producto.price} </p>
      </div>
      <Link
        className="btn btn-primary text-center"
        to={`/producto/${producto.id}`}
      >
        Ver producto
      </Link>
      <button
        className="btn btn-secondary text-center mt-1"
        onClick={() => addToCart(producto, 1)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Item;
