import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../api/axios";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get cart when app loads
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await API.get("/cart");

        if (data.success) {
          setCart(data.cart);
        }
      } catch (error) {
        console.log(
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);


  // ADD TO CART
  const addToCart = async (product, quantity = 1) => {
    try {
      const { data } = await API.post("/cart", {
        productId: product._id,
        quantity,
      });

      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };


  // REMOVE
  const removeFromCart = async (productId) => {
    try {
      const { data } = await API.delete(
        `/cart/${productId}`
      );

      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };


  // INCREASE
  const increaseQuantity = async (productId) => {
    try {
      const { data } = await API.patch(
        `/cart/increase/${productId}`
      );

      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };


  // DECREASE
  const decreaseQuantity = async (productId) => {
    try {
      const { data } = await API.patch(
        `/cart/decrease/${productId}`
      );

      if (data.success) {
        setCart(data.cart);
      }
    } catch (error) {
      console.log(
        error.response?.data || error.message
      );
    }
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);