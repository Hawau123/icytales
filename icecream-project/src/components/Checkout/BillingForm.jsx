import { useState } from "react";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
    paymentMethod: "card",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("Your order has been placed successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Billing Address */}
      <h2
        className="text-[18px] font-semibold text-[#0F0200]"
        style={{ fontFamily: "Archivo" }}
      >
        Billing Address:
      </h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            First name
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          />
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Last name
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          />
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Email address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          />
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            State
          </label>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] bg-white px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          >
            <option value="">Select State</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Oyo</option>
            <option>Ogun</option>
          </select>
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Select City"
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          />
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Zip / Postal Code
          </label>

          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
          />
        </div>
      </div>

      {/* Payment */}
      <h2
        className="mt-10 text-[18px] font-semibold text-[#0F0200]"
        style={{ fontFamily: "Archivo" }}
      >
        Payment Method:
      </h2>

      {/* Credit Card */}
      <label className="mt-5 flex h-12 cursor-pointer items-center justify-between rounded-full border border-[#E5E5E5] px-5">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === "card"}
            onChange={handleChange}
          />

          <span
            className="text-[12px]"
            style={{ fontFamily: "Archivo" }}
          >
            Credit Card
          </span>
        </div>

        <img
          src="/Images/checkout-cardimage.png"
          alt="Accepted cards"
          className="h-5 object-contain"
        />
      </label>

      {/* Card Number */}
      <div className="mt-5">
        <label
          className="text-[11px] text-[#555]"
          style={{ fontFamily: "Archivo" }}
        >
          Card Number
        </label>

        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px] outline-none focus:border-[#F83D8E]"
        />
      </div>

      {/* Expiry + Security */}
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Month
          </label>

          <select
            name="expiryMonth"
            value={formData.expiryMonth}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px]"
          >
            <option>Month</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Year
          </label>

          <select
            name="expiryYear"
            value={formData.expiryYear}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px]"
          >
            <option>Year</option>

            {[...Array(10)].map((_, i) => {
              const year = new Date().getFullYear() + i;

              return (
                <option key={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            className="text-[11px] text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            Security Code
          </label>

          <input
            type="text"
            name="securityCode"
            value={formData.securityCode}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-full border border-[#E5E5E5] px-4 text-[12px]"
          />
        </div>
      </div>

      {/* Cash on Delivery */}
      <label className="mt-5 flex h-12 cursor-pointer items-center justify-between rounded-full border border-[#E5E5E5] px-5">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={formData.paymentMethod === "cash"}
            onChange={handleChange}
          />

          <span
            className="text-[12px]"
            style={{ fontFamily: "Archivo" }}
          >
            Cash on Delivery
          </span>
        </div>
      </label>

      <p
        className="mt-7 text-center text-[10px] text-[#888]"
        style={{ fontFamily: "Archivo" }}
      >
        By clicking the button, you agree to our{" "}
        <span className="text-[#F83D8E]">
          Terms and Conditions
        </span>
      </p>

      <button
        type="submit"
        className="mt-5 flex h-12 w-full items-center justify-center rounded-full bg-[#F83D8E] text-[12px] font-medium text-white shadow-[0_8px_20px_rgba(248,61,142,0.25)] transition hover:bg-[#683292]"
        style={{ fontFamily: "Archivo" }}
      >
        Place Order Now →
      </button>

      {message && (
        <p
          className="mt-5 text-center text-[12px] text-[#F83D8E]"
          style={{ fontFamily: "Archivo" }}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default BillingForm;