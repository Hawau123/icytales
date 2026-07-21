const Journey = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24">
      {/* Faded right decoration */}
      <img
        src="/Images/journey-decoration.png"
        alt=""
        className="
          pointer-events-none absolute
          -right-12 top-28
          hidden w-52 select-none opacity-30
          lg:block
        "
      />

      <div
        className="
          relative z-10 mx-auto flex w-full max-w-250
          flex-col items-center gap-12 px-6
          lg:flex-row lg:justify-between lg:gap-16
        "
      >
        {/* Left circular image */}
        <div
          className="
            flex h-72 w-72 shrink-0
            items-center justify-center overflow-hidden rounded-full
            sm:h-80 sm:w-80
            lg:h-96 lg:w-96
          "
        >
          <img
            src="/Images/journey-couple.png"
            alt="Couple enjoying ice cream"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="w-full max-w-125 text-center lg:text-left">
          <h2
            className="
              text-[36px] leading-9 text-[#0F0200]
              sm:text-[42px] sm:leading-10.5
              lg:text-[48px] lg:leading-12
            "
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our <span className="text-[#F83D8E]">Journey</span> Began
            <br className="hidden sm:block" />
            With a Simple Dream
          </h2>

          <p
            className="
              mt-6 text-[13px] leading-6 text-[#666]
              sm:text-[14px]
            "
            style={{ fontFamily: "Archivo" }}
          >
            Our goal is to make the best ice cream using only the finest,
            natural ingredients. From rich, creamy classics to adventurous new
            creations, every flavor is meticulously crafted in-house to ensure
            the highest quality and freshness.
          </p>

          <p
            className="
              mt-4 text-[13px] leading-6 text-[#666]
              sm:text-[14px]
            "
            style={{ fontFamily: "Archivo" }}
          >
            We take pride in offering a diverse range of options, including
            dairy-free, vegan, and gluten-free choices, so everyone can find
            their perfect scoop.
          </p>

          <button
            type="button"
            className="
              mt-7 flex h-11 w-34 items-center justify-center gap-2
              rounded-[30px] bg-[#F83D8E]
              text-[11px] font-semibold text-white
              shadow-[0_3px_22px_3px_rgba(248,61,142,0.31)]
              transition hover:-translate-y-0.5
              mx-auto lg:mx-0
            "
            style={{ fontFamily: "Archivo" }}
          >
            Read More <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journey;