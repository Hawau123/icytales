import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const CartItems = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2
          className="text-[18px] font-semibold text-[#0F0200]"
          style={{ fontFamily: "Archivo" }}
        >
          Shopping Cart
        </h2>

        <span
          className="text-[12px] font-semibold text-[#0F0200]"
          style={{ fontFamily: "Archivo" }}
        >
          ({String(cartItems.length).padStart(2, "0")} Items)
        </span>
      </div>

      <div
        className="
          mt-6 hidden grid-cols-[minmax(0,2fr)_90px_130px_90px_40px]
          border-b border-[#EAEAEA] pb-4
          text-[11px] text-[#777]
          md:grid
        "
        style={{ fontFamily: "Archivo" }}
      >
        <span>Product Details</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span />
      </div>

      <div>
        {cartItems.length === 0 ? (
          <div className="py-20 text-center">
            <h3
              className="text-[30px] text-[#0F0200]"
              style={{ fontFamily: "Berkshire Swash" }}
            >
              Your cart is empty
            </h3>

            <NavLink
              to="/shop"
              className="
                mt-6 inline-flex rounded-full
                bg-[#F83D8E] px-7 py-3
                text-[13px] text-white
              "
              style={{ fontFamily: "Archivo" }}
            >
              Continue Shopping →
            </NavLink>
          </div>
        ) : (
          cartItems.map((item) => (
            <article
              key={item.id}
              className="
                grid gap-5 border-b border-[#EAEAEA] py-5
                md:grid-cols-[minmax(0,2fr)_90px_130px_90px_40px]
                md:items-center
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-20 w-20 shrink-0 items-center justify-center
                    rounded-lg bg-[#FFF8F3] p-2
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3
                    className="text-[13px] font-semibold text-[#0F0200]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {item.name}
                  </h3>

                  <p
                    className="mt-2 text-[10px] text-[#777]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    Color:{" "}
                    <span className="text-[#0F0200]">
                      {item.color}
                    </span>
                  </p>

                  <p
                    className="mt-1 text-[10px] text-[#777]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    Size:{" "}
                    <span className="text-[#0F0200]">
                      {item.size}
                    </span>
                  </p>
                </div>
              </div>

              <span
                className="text-[12px] font-semibold text-[#F83D8E]"
                style={{ fontFamily: "Archivo" }}
              >
                ${item.price.toFixed(2)}
              </span>

              <div
                className="
                  flex h-9 w-fit items-center
                  rounded-full border border-[#E4E4E4]
                  px-1
                "
              >
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full text-[#555]
                    hover:bg-[#FFF1F7]
                  "
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  <FiMinus size={12} />
                </button>

                <span
                  className="w-8 text-center text-[11px]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full text-[#555]
                    hover:bg-[#FFF1F7]
                  "
                  aria-label={`Increase ${item.name} quantity`}
                >
                  <FiPlus size={12} />
                </button>
              </div>

              <span
                className="text-[12px] font-semibold text-[#0F0200]"
                style={{ fontFamily: "Archivo" }}
              >
                ${(item.price * item.quantity).toFixed(2)}
              </span>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name}`}
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full border border-[#F8A8CA]
                  text-[#F83D8E]
                  transition hover:bg-[#F83D8E] hover:text-white
                "
              >
                <FiX size={13} />
              </button>
            </article>
          ))
        )}
      </div>

      <NavLink
        to="/shop"
        className="
          mt-8 inline-flex items-center gap-2
          text-[12px] text-[#683292]
          hover:text-[#F83D8E]
        "
        style={{ fontFamily: "Archivo" }}
      >
        <span>+</span>
        Continue Shopping
      </NavLink>
    </section>
  );
};

export default CartItems;