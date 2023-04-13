import React, { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../Context/CartContext";

export const OrderForms = () => {
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const {cart} = useContext(CartContext);
  console.log(cart);

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail,
      },
      items: selectedItems,
      total: total,
    };

    addDoc(ordersCollection, order)
      .then((docRef) => {
        console.log("Documento enviado. ID:", docRef.id);
        alert("¡Compra realizada con éxito!");
        resetForm();
      })
      .catch((e) => {
        console.log("Error al agregar el documento", e);
      });
  };

  const handleSelectItem = (item) => {
    const isSelected = selectedItems.includes(item);
    if (!isSelected) {
      setSelectedItems([...selectedItems, item]);
      setTotal(total + item.price);
    } else {
      const updatedSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
      setSelectedItems(updatedSelectedItems);
      setTotal(total - item.price);
    }
  };

  const resetForm = () => {
    setBuyerName("");
    setBuyerPhone("");
    setBuyerEmail("");
    setSelectedItems([]);
    setTotal(0);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
              <form
                className="row g-3 needs-validation"
                action=""
                novalidate
                onSubmit={handleSubmit}
              >
                <div>
                  <label for="Mail" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setBuyerName(e.target.value)}
                    value={buyerName}
                  />
                </div>

                <div>
                  <label for="Mail" class="form-label">
                    Telefono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    value={buyerPhone}
                  />
                </div>

                <div>
                  <label for="Mail" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    value={buyerEmail}
                  />
                </div>

                <br />

                <h3>Seleccione los productos que quiere comprar:</h3>

                {cart &&
                  cart.map((item) => (
                    <div key={item.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedItems.some(
                            (selectedItem) => selectedItem.id === item.id
                          )}
                          onChange={() => handleSelectItem(item)}
                        />
                        {item.title} - ${item.price}
                      </label>
                    </div>
                ))}

                <br />

                <h3>Total: ${total}</h3>

                <button type="submit" className="btn btn-primary">
                  Realizar compra
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
