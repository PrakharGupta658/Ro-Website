import React from "react";
import { useCart } from "react-use-cart";


function CardStructure() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="text-center mt-5">Your Cart is Empty</h2>;

  function handleTotalItem() {
    window.location.reload();
  }
  return (
    <>
      <h5 className="text-center m-5">
        Cart ({totalUniqueItems}) total Items: ({totalItems})
      </h5>

      <table className="table table-light table-hover m-5 ">
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.imgsrc} style={{ height: "6rem" }} />
                </td>
                <td>{item.title}</td>
                <td>Price ₹({item.price})</td>
                <td>Quality ({item.quantity})</td>
                <td>
                  <button
                    className="btn btn-warning ms-2 ml-5"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                   -
                  </button>
                  <button
                    className="btn btn-warning ms-2 ml-4"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                 +
                  </button>
                  <button
                    className="btn btn-danger ms-2 mt-4"
                    onClick={() => {
                      handleTotalItem();
                      removeItem(item.id)}}
                  >
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div className="col-auto ms-auto">
        <h2> Total Price : INR {cartTotal}</h2>
      </div>
      <div className="col-auto">
        <button className="btn btn-danger" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <a href="tel:7753914103">
        <button className="btn btn-primary m-2">Proccess To Call</button>
        </a>
      </div>
    </>
  );
}

export default CardStructure;
export {};
