const AboutNewsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24">
      <div className="relative mx-auto w-full max-w-250 px-6">
        {/* Left decoration */}
        <img
          src="/Images/relive-circle2.png"
          alt=""
          className="
            pointer-events-none absolute
            left-4 top-32
            hidden w-16 select-none
            sm:block sm:left-10 sm:w-20
            lg:left-8 lg:top-30 lg:w-24
          "
        />

        {/* Right decoration */}
        <img
          src="/Images/relive-triangle2.png"
          alt=""
          className="
            pointer-events-none absolute
            right-4 top-6
            hidden w-8 select-none
            sm:block sm:right-10 sm:w-10
            lg:right-12 lg:top-8 lg:w-12
          "
        />

        <div className="relative z-10 text-center">
          <h2
            className="
              text-[36px] leading-9 text-[#0F0200]
              sm:text-[42px] sm:leading-10.5
            "
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
            onSubmit={handleSubmit}
            className="
              mx-auto mt-8 flex w-full max-w-150
              flex-col items-center gap-3
              sm:flex-row sm:gap-2
            "
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="
                h-11 w-full rounded-[30px]
                bg-white px-5
                text-[10px] text-[#0F0200]
                outline-none
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
              "
              style={{ fontFamily: "Archivo" }}
            />

            <button
              type="submit"
              className="
                h-11 w-40 shrink-0 rounded-[30px]
                bg-[#F83D8E]
                text-[11px] font-medium text-white
                shadow-[0_3px_22px_3px_rgba(248,61,142,0.31)]
                transition hover:-translate-y-0.5
              "
              style={{ fontFamily: "Archivo" }}
            >
              Subscribe &nbsp; →
            </button>
          </form>

          <label
            className="
              mt-5 flex items-center justify-center gap-2
              text-[9px] text-[#777]
            "
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

export default AboutNewsletter;