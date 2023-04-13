import React from "react";
import { ItemModal } from "./ItemModal";

export const ItemListModal = ({ productos }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap mt-5">
      {productos &&
        productos.map((prod) => <ItemModal key={prod.id} producto={prod} />)}
    </div>
  );
};
