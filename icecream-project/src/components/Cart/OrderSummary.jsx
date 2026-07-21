import { useNavigate } from "react-router-dom";
const OrderSummary = ({
  itemCount,
  subtotal,
  shipping,
  grandTotal,
}) => {
  const navigate = useNavigate();
  return (
    <aside
      className="
        h-fit overflow-hidden rounded-2xl
        border-t-2 border-[#683292]
        bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.07)]
      "
    >
      <div className="px-6 py-5">
        <h2
          className="text-center text-[15px] font-semibold text-[#0F0200]"
          style={{ fontFamily: "Archivo" }}
        >
          Order Summary
        </h2>

        <div className="mt-6 flex gap-2">
          <input
            type="text"
            placeholder="Apply Coupons"
            className="
              h-10 min-w-0 flex-1 rounded-full
              border border-[#E5E5E5]
              px-4 text-[11px] outline-none
              focus:border-[#F83D8E]
            "
            style={{ fontFamily: "Archivo" }}
          />

          <button
            type="button"
            className="
              rounded-full bg-[#683292]
              px-4 text-[10px] text-white
              transition hover:bg-[#F83D8E]
            "
            style={{ fontFamily: "Archivo" }}
          >
            Apply
          </button>
        </div>

        <div className="mt-6 border-t border-[#EEEEEE] pt-5">
          <h3
            className="text-[11px] font-semibold text-[#0F0200]"
            style={{ fontFamily: "Archivo" }}
          >
            Product Details:
          </h3>

          <div
            className="mt-4 space-y-4 text-[11px]"
            style={{ fontFamily: "Archivo" }}
          >
            <div className="flex justify-between text-[#777]">
              <span>Sub Total</span>
              <span className="font-semibold text-[#0F0200]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-[#777]">
              <span>Shipping</span>
              <span className="font-semibold text-[#0F0200]">
                ${shipping.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            mt-6 flex items-center justify-between
            border-t border-[#EEEEEE] pt-5
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

        <button
          type="button"
          onClick={() => navigate("/checkout")}
          disabled={itemCount === 0}
          className="
            mt-5 flex h-11 w-full items-center justify-center
            rounded-full bg-[#F83D8E]
            text-[11px] font-semibold text-white
            shadow-[0_8px_22px_rgba(248,61,142,0.24)]
            transition hover:bg-[#683292]
            disabled:cursor-not-allowed disabled:opacity-50
          "
          style={{ fontFamily: "Archivo" }}
        >
          Proceed to checkout →
        </button>
      </div>

      <div
        className="
          border-t border-[#EEEEEE]
          px-6 py-4 text-[8px] leading-3 text-[#999]
        "
        style={{ fontFamily: "Archivo" }}
      >
        <p>Secure Payments through Easy Returns.</p>
        <p className="mt-1">100% Authentic Products.</p>
      </div>
    </aside>
  );
};

export default OrderSummary;