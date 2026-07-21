import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const createCartId = (product) =>
  product.cartId ??
  `${product.id}-${product.color ?? "default"}-${product.size ?? "default"}`;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cartId = createCartId(product);
    const quantity = Math.max(1, Number(product.quantity) || 1);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.cartId === cartId
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          cartId,
          quantity,
        },
      ];
    });
  };

  const increaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeFromCart = (cartId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};