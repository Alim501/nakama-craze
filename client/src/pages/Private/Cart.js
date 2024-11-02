import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/CartSlice";
import Price from "../../components/Product/Price";
import Loading from "../../components/Elements/Loading";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart.status === "idle") {
      dispatch(fetchUserCart());
    }
  }, [dispatch, cart.status]);

  const handleAddItem = (productId) => {
    dispatch(addItemToCart({ productId, quantity: 1 }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItemFromCart({ productId }));
  };

  if (cart.status === "loading") {
    return <Loading></Loading>;
  }

  if (cart.status === "failed") {
    return <div>Error: {cart.error}</div>;
  }
  console.log(cart.items);
  return (
    <Container>
      {cart.items.length === 0 ? (
        <h2 className="text-center h-71vh">ПУСТО</h2>
      ) : (
        <div className="bg-white">
          <ul className="p-0">
            {cart.items.map((item) => (
              <li key={item.item.id} className="cart-item d-flex p-5">
                <Image
                  width={100}
                  height={100}
                  src={
                    process.env.REACT_APP_API_URL +
                    "/files/Products/" +
                    item.item.product.icon
                  }
                />
                <div className="d-flex justify-content-between w-100">
                  <div className="p-4">
                    <div className="d-flex text-CF">
                      <h5 className="me-5">Количество : {item.quantity}</h5>
                      <h5 className="me-5">Размер : {item.item.size.code}</h5>
                      <h5 className="me-5">Цвет : {item.item.color.title}</h5>
                    </div>
                    <h3 className="mt-2">{item.item.product.title}</h3>
                  </div>
                  <div className="cart-actions">
                    <div>
                      <button
                        className="btn"
                        onClick={() => handleAddItem(item.item.productId)}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="8" fill="#F3F3F2" />
                          <rect
                            x="11"
                            y="19"
                            width="18"
                            height="2"
                            fill="#262626"
                          />
                        </svg>
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleRemoveItem(item.item.productId)}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="8" fill="#F3F3F2" />
                          <rect
                            x="11"
                            y="19"
                            width="18"
                            height="2"
                            fill="#262626"
                          />
                          <rect
                            x="21"
                            y="11"
                            width="18"
                            height="2"
                            transform="rotate(90 21 11)"
                            fill="#262626"
                          />
                        </svg>
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleRemoveItem(item.item.productId)}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="8" fill="#262626" />
                          <rect
                            x="14.3438"
                            y="12.6569"
                            width="18"
                            height="2"
                            transform="rotate(45 14.3438 12.6569)"
                            fill="#F3F3F2"
                          />
                          <rect
                            x="27.0703"
                            y="14.0711"
                            width="18"
                            height="2"
                            transform="rotate(135 27.0703 14.0711)"
                            fill="#F3F3F2"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="ps-5 pt-4">
                      <Price price={item.item.product.price}></Price>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <button
              // onClick={handleSubmit}
              className="rounded-3 bg-black border-0 text-white my-5 py-3 px-4 black-button"
            >
              <h4>Купить</h4>
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
