import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemList from "./ItemList";
import { ItemListModal } from "./ItemListModal";
import { Link } from "react-router-dom";

export const ShoppingList = () => {
  const { cart, getTotal, getTotalQuantity, clearCart } =
    useContext(CartContext);

  return (
    <div
      class="modal modal-xl fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className=" modal-title fs-2" id="staticBackdropLabel">
              Carrito de compras
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="contenedorCarrito" class="row">
              <ItemListModal productos={cart}></ItemListModal>
            </div>
            {cart.length > 0 && (
              <>
                <button
                  className="btn btn-danger mt-5"
                  onClick={() => clearCart()}
                  id="vaciarCarrito"
                >
                  Eliminar carrito
                </button>
                <h1
                  id="resultadoPrecio"
                  className="bg-white bg-opacity-75 rounded-4 shadow mt-5"
                >
                  Precio: {getTotal()} - Cantidad total: {getTotalQuantity()}
                </h1>
              </>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
