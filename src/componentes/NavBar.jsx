import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ShoppingList } from "./ShoppingList";

const NavBar = () => {
  const { cart, getTotal, getTotalQuantity, clearCart } =
    useContext(CartContext);
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light fs-1 me-5" href="#">
            Lila
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/motricidad"}>Motricidad</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/emociones"}>Emociones</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/juego"}>Juego</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/arte"}>Arte</Link>
              </li>
              <li className="nav-item text-light ms-5">
                <Link to={"/categorias/educacion"}>Educacion</Link>
              </li>
              <li className="nav-item text-light ms-5">
                {getTotalQuantity()}
                <a
                  id="botonCarrito1"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  class="nav-item ms-auto mx-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ShoppingList/>
    </>
  );
};

export default NavBar;
