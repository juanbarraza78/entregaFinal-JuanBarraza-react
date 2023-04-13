import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div className="d-flex">
      <div style={{ width: "40rem", margin: "3rem" }}>
        <img src={producto.url} className="card-img-top" alt={producto.title} />
      </div>
      <div
        className="rounded border"
        style={{ width: "40rem", margin: "3rem" }}
      >
        <p className="text-center fs-1 fw-bolder"> {producto.title} </p>
        <p className="text-center fs-2"> Precio: ${producto.price} </p>
        <p className="text-center fs-2"> Cantidad: </p>
        <p className="text-center fs-4"> Descripcion: {producto.detail} </p>
      </div>
    </div>
  );
};

export default ItemDetail;
