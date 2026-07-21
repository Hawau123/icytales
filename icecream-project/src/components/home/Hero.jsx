const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#FFF6FB] via-[#FFF8F2] to-[#F2FFFD]">
      {/* Faded logo */}
      <img
        src="/Images/logo1.png"
        alt=""
        className="
          pointer-events-none absolute left-0 top-24
          hidden w-28 -rotate-12 opacity-10
          md:block lg:top-16 lg:w-35
        "
      />

      <div
        className="
          relative z-10 mx-auto flex w-full max-w-275
          flex-col items-center px-5 pt-12 pb-24
          sm:px-6 sm:pt-14
          lg:min-h-125 lg:flex-row lg:justify-between lg:py-0
        "
      >
        {/* Left content */}
        <div className="w-full text-center lg:w-117.5 lg:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start lg:gap-4">
            <span className="h-0.5 w-10 bg-[#683292] sm:w-13.75"></span>

            <p
              className="text-[22px] leading-7 text-[#0F0200] sm:text-[28px]"
              style={{ fontFamily: "Berkshire Swash" }}
            >
              Welcome to The
            </p>
          </div>

          <h1
            className="
              text-[42px] leading-11 text-[#0F0200]
              sm:text-[56px] sm:leading-14
              lg:text-[64px] lg:leading-15.5
            "
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Discover <span className="text-[#F83D8E]">Sweet</span>
            <br />
            Delights!
          </h1>

          <p
            className="
              mx-auto mt-4 w-full max-w-102.5
              text-[13px] leading-5 text-[#0F0200]
              sm:text-[14px] sm:leading-5.25
              lg:mx-0
            "
            style={{ fontFamily: "Archivo" }}
          >
            Relish the timeless taste of handcrafted ice cream, made with
            passion and the finest ingredients.
          </p>

          <button
            className="
              mt-5 h-11 w-52.5 rounded-[30px]
              text-[12px] font-medium text-white
            "
            style={{
              background: "#683292",
              boxShadow: "0px 3px 22px 3px #6832924F",
              fontFamily: "Archivo",
            }}
          >
            Browse Our Classic Flavors →
          </button>
        </div>

        {/* Right image */}
        <div
          className="
            relative mt-8 flex h-72 w-72
            shrink-0 items-center justify-center
            sm:h-92.5 sm:w-92.5
            lg:mt-0 lg:h-125 lg:w-125
          "
        >
          {/* Grey circle */}
          <div
            className="
              absolute h-64 w-64 rounded-full
              bg-[#D9D9D9] opacity-70
              sm:h-85 sm:w-85
              lg:h-117.5 lg:w-117.5
            "
          ></div>

          {/* Ice cream */}
          <img
            src="/Images/hero.png"
            alt="Hero Ice Cream"
            className="
              relative z-10 h-auto w-72 object-contain
              sm:w-90
              lg:w-125
            "
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full">
        <svg
          viewBox="0 0 1440 90"
          className="h-10 w-full sm:h-12 lg:h-17.5"
          preserveAspectRatio="none"
        >
          <path
            d="M0 35C80 55 120 15 210 35C300 55 340 15 430 35C520 55 560 15 650 35C740 55 780 15 870 35C960 55 1000 15 1090 35C1180 55 1220 15 1310 35C1370 48 1410 40 1440 35V90H0V35Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;