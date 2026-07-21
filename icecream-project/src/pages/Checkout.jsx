import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CheckoutHero from "../components/Checkout/CheckoutHero";
import BillingForm from "../components/Checkout/BillingForm";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, subtotal } = useCart();

  const shipping = cartItems.length > 0 ? 20 : 0;
  const grandTotal = subtotal + shipping;

  return (
    <>
      <Navbar />
      <CheckoutHero />

      <main className="mx-auto w-full max-w-300 px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <BillingForm />

          <CheckoutSummary
            cartItems={cartItems}
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

export default Checkout;