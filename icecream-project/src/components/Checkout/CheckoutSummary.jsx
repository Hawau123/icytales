const CheckoutSummary = ({
  cartItems,
  subtotal,
  shipping,
  grandTotal,
}) => {
  return (
    <aside
      className="
        h-fit overflow-hidden rounded-[14px]
        border-t-2 border-[#683292]
        bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.07)]
      "
    >
      <div
        className="
          grid grid-cols-[1fr_auto]
          border-b border-[#EEEEEE]
          px-5 py-4
          text-[11px] font-semibold text-[#0F0200]
        "
        style={{ fontFamily: "Archivo" }}
      >
        <span>Item</span>
        <span>Price</span>
      </div>

      <div className="px-5">
        {cartItems.length === 0 ? (
          <p
            className="py-10 text-center text-[12px] text-[#777]"
            style={{ fontFamily: "Archivo" }}
          >
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.cartId}
              className="
                grid grid-cols-[1fr_auto] gap-4
                border-b border-[#EEEEEE] py-4
              "
            >
              <div>
                <h3
                  className="text-[11px] font-semibold text-[#0F0200]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {item.quantity}x {item.name}
                </h3>

                <p
                  className="mt-1 text-[9px] leading-3 text-[#777]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {item.desc ?? "Freshly handcrafted ice cream."}
                </p>
              </div>

              <span
                className="text-[10px] font-semibold text-[#0F0200]"
                style={{ fontFamily: "Archivo" }}
              >
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="space-y-4 px-5 py-5">
        <div
          className="flex items-center justify-between text-[10px] text-[#777]"
          style={{ fontFamily: "Archivo" }}
        >
          <span>Subtotal</span>
          <span className="font-semibold text-[#0F0200]">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div
          className="flex items-center justify-between text-[10px] text-[#777]"
          style={{ fontFamily: "Archivo" }}
        >
          <span>Shipping</span>
          <span className="font-semibold text-[#0F0200]">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div
          className="
            flex items-center justify-between
            border-t border-[#EEEEEE] pt-4
          "
        >
          <span
            className="text-[11px] font-semibold text-[#0F0200]"
            style={{ fontFamily: "Archivo" }}
          >
            Grand Total
          </span>

          <span
            className="text-[12px] font-bold text-[#F83D8E]"
            style={{ fontFamily: "Archivo" }}
          >
            ${grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSummary;