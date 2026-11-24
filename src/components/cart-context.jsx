
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  // SHOPPING CART
  const [cart, setCart] = useState([]);

  // WISHLIST - Load saved items from localStorage
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(
      localStorage.getItem("indiaEatzWishlist") || "[]"
    );
  });

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "indiaEatzWishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // ADD TO CART
  const addToCart = (product) => {
    const quantity = Number(product.quantity) || 1;

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  // UPDATE CART QUANTITY
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  // CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // CART TOTAL
  const cartTotal = cart.reduce(
    (total, item) =>
      total + (Number(item.price) || 0) * item.quantity,
    0
  );

  // ADD OR REMOVE FROM WISHLIST
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const alreadyExists = prevWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return prevWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevWishlist, product];
    });
  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  // CHECK WHETHER PRODUCT IS WISHLISTED
  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        // Cart
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,

        // Wishlist
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
