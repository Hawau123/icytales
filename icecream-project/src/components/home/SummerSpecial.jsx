const SummerSpecial = () => {
  return (
    <section className="relative w-full h-115 sm:h-110 lg:h-109.5 overflow-hidden bg-[#683292]">
      <div className="relative w-full max-w-480 h-full mx-auto px-5 sm:px-8 lg:px-16">
        {/* Paper plane */}
        <img
          src="/Images/paper-plane2.png"
          alt=""
          className="
            absolute z-10 object-contain
            left-5 top-10 w-9
            sm:left-10 sm:top-12 sm:w-10
            lg:left-34 lg:top-25 lg:w-12
          "
        />

        {/* Dots */}
        <img
          src="/Images/dots2.png"
          alt=""
          className="
            absolute z-10 object-contain
            left-5 bottom-8 w-18
            sm:left-10 sm:bottom-10 sm:w-20
            lg:left-26 lg:top-66 lg:bottom-auto lg:w-21
          "
        />

        {/* Main text */}
        <div
          className="
            absolute z-20
            left-1/2 top-27 w-[90%] -translate-x-1/2
            text-center
            sm:top-25 sm:w-115
            lg:left-56 lg:top-20 lg:w-135
            lg:translate-x-0 lg:text-left
          "
        >
          <h2
            className="
              text-[48px] leading-12 text-white
              sm:text-[56px] sm:leading-14
              lg:text-[72px] lg:leading-19.5
            "
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Summer
            <br />
            Special!
          </h2>

          <p
            className="
              mt-5 text-[15px] leading-5 text-white
              sm:text-[17px] sm:leading-6
              lg:text-[24px] lg:leading-7
            "
            style={{ fontFamily: "Archivo" }}
          >
            Buy One Sundae, Get One 50% Off!
          </p>

          <div
            className="
              mt-7 flex items-center justify-center gap-3
              lg:justify-start lg:gap-4
            "
          >
            <button
              type="button"
              className="
                w-40 h-12 rounded-[30px]
                bg-[#F83D8E]
                text-[11px] font-semibold text-white
                sm:w-44 sm:h-13
                lg:w-52.75 lg:h-15.5 lg:text-[13px]
              "
              style={{
                boxShadow: "0px 3px 22px 3px #F83D8E4F",
                fontFamily: "Archivo",
              }}
            >
              Get This Deal →
            </button>

            <span
              className="
                max-w-32 text-left text-[8px] leading-3 text-white
                sm:max-w-40 sm:text-[9px]
                lg:max-w-none lg:text-[12px]
              "
              style={{ fontFamily: "Archivo" }}
            >
              Use code: SUMMER50 at checkout.
            </span>
          </div>
        </div>

        {/* Dashed line */}
        <img
          src="/Images/dashed-line.png"
          alt=""
          className="
            absolute z-10 object-contain
            right-7 top-8 w-28
            sm:right-16 sm:top-8 sm:w-32
            lg:left-150 lg:right-auto lg:top-12 lg:w-40
          "
        />

        {/* 50% badge */}
        <img
          src="/Images/50-off-badge.png"
          alt="50% off"
          className="
            absolute z-20 object-contain
            right-8 top-16 w-22 h-22
            sm:right-18 sm:top-17 sm:w-25 sm:h-25
            lg:left-142 lg:right-auto lg:top-24
            lg:w-34.5 lg:h-34.5
          "
        />

        {/* Faded ice cream */}
        <img
          src="/Images/summer-icecream.png"
          alt=""
          className="
            absolute pointer-events-none select-none object-contain
            -right-20 bottom-0 w-44 opacity-25
            sm:-right-16 sm:w-48 sm:opacity-30
            lg:-right-10 lg:top-37.5 lg:bottom-auto
            lg:w-55.5 lg:h-92.25 lg:opacity-40
          "
        />
      </div>
    </section>
  );
};

export default SummerSpecial;