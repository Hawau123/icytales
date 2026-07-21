import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CartHero from "../components/Cart/CartHero";
import CartItems from "../components/Cart/CartItems";
import OrderSummary from "../components/Cart/OrderSummary";

const initialCartItems = [
  {
    id: 1,
    image: "/Images/vanilla-cone.png",
    name: "Classic Vanilla",
    color: "White",
    size: "L",
    price: 4.99,
    quantity: 3,
  },
  {
    id: 2,
    image: "/Images/brownie-sundae.png",
    name: "Chocolate Brownie",
    color: "Brown",
    size: "S",
    price: 5.49,
    quantity: 4,
  },
  {
    id: 3,
    image: "/Images/strawberry-shortcake.png",
    name: "Strawberry Cake",
    color: "Pink",
    size: "M",
    price: 5.29,
    quantity: 2,
  },
  {
    id: 4,
    image: "/Images/mint-cone.png",
    name: "Mint Chocolate",
    color: "Green",
    size: "L",
    price: 3.99,
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 20 : 0;
  const grandTotal = subtotal + shipping;

  return (
    <>
      <Navbar />
      <CartHero />

      <main className="mx-auto w-full max-w-300 px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <CartItems
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />

          <OrderSummary
            itemCount={cartItems.length}
            subtotal={subtotal}
            shipping={shipping}
            grandTotal={grandTotal}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;