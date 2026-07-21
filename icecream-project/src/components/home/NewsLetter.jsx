const Newsletter = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      <div className="relative max-w-250 mx-auto px-6">
        {/* Left decoration */}
        <img
          src="/Images/51.png"
          alt=""
          className="hidden md:block absolute left-10 top-36 w-14 object-contain pointer-events-none select-none"
        />

        {/* Right triangle decoration */}
        <img
          src="/Images/relive-triangle.png"
          alt=""
          className="hidden md:block absolute right-16 top-8 w-10 object-contain pointer-events-none select-none"
        />

        <div className="text-center">
          <h2
            className="text-[40px] leading-10 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Sign up For{" "}
            <span className="text-[#F83D8E]">Exclusive Deals</span>
            <br />
            and Updates
          </h2>

          <p
            className="mt-5 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Get 10% off your next order and stay updated with our latest offers.
          </p>

          <form
            className="mt-8 mx-auto flex w-full max-w-150 flex-col items-center gap-3 sm:flex-row sm:gap-0"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="h-11 w-full rounded-[30px] bg-white px-5 text-[10px] text-[#0F0200] outline-none shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:rounded-r-none"
              style={{ fontFamily: "Archivo" }}
              required
            />

            <button
              type="submit"
              className="h-11 w-40 shrink-0 rounded-[30px] bg-[#F83D8E] text-[11px] font-medium text-white shadow-[0_3px_22px_3px_rgba(248,61,142,0.31)] sm:rounded-l-none"
              style={{ fontFamily: "Archivo" }}
            >
              Subscribe &nbsp; →
            </button>
          </form>

          <label
            className="mt-5 flex items-center justify-center gap-2 text-[9px] text-[#777]"
            style={{ fontFamily: "Archivo" }}
          >
            <input
              type="checkbox"
              className="h-3 w-3 accent-[#F83D8E]"
            />

            <span>
              I agree to the{" "}
              <a href="#" className="text-[#F83D8E] underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;