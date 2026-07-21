const Mission = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#683292] py-20">
      <div className="relative mx-auto flex max-w-250 flex-col-reverse items-center gap-14 px-6 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="relative z-10 max-w-120 text-center lg:text-left">
          {/* Triangle */}
          <img
            src="/Images/mission-triangle.png"
            alt=""
            className="absolute -left-20 top-6 hidden w-7 lg:block"
          />

          {/* Cross */}
          <img
            src="/Images/mission-cross.png"
            alt=""
            className="absolute -left-24 top-40 hidden w-6 lg:block"
          />

          {/* Heading */}
          <h2
            className="text-[36px] leading-10 text-white lg:text-[48px] lg:leading-12"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our Mission is to
            <br />
            Create Moments
          </h2>

          {/* Paragraph */}
          <p
            className="mt-6 text-[14px] leading-7 text-white/80"
            style={{ fontFamily: "Archivo" }}
          >
            We strive to foster a welcoming and joyful environment where
            customers of all ages can gather, celebrate, and make lasting
            memories. Our commitment extends beyond serving great ice cream.
          </p>

          {/* Button */}
          <button
            className="mt-8 h-11 w-34 rounded-full bg-[#F83D8E] text-[12px] font-semibold text-white shadow-[0_3px_22px_3px_rgba(248,61,142,0.3)] transition hover:scale-105"
            style={{ fontFamily: "Archivo" }}
          >
            Read More →
          </button>

          {/* Wave */}
          <img
            src="/Images/mission-wave.png"
            alt=""
            className="absolute right-0 bottom-0 hidden w-10 lg:block"
          />
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Pink Ring */}
          <div className="absolute -top-4 -left-4 h-107.5 w-107.5 rounded-full border-16 border-[#F83D8E]" />

          {/* Image */}
          <div className="relative h-107.5 w-107.5 overflow-hidden rounded-full">
            <img
              src="/Images/mission-image.png"
              alt="Mission"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;