const AboutPreview = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">

      <div className="max-w-275 mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT SIDE */}
        <div className="relative w-full lg:w-125 flex justify-center">

          {/* Grey circle */}
          <div className="absolute w-85 h-85 rounded-full bg-[#F5EFFB]"></div>

          {/* Girl */}
          <img
            src="/Images/about-girl.png"
            alt="Girl"
            className="relative z-10 w-90 object-contain"
          />

          {/* Left decoration */}
          <img
            src="/Images/left-circle.png"
            alt=""
            className="absolute left-2 bottom-24 w-7 z-20"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-120 mt-12 lg:mt-0">

          {/* Dots */}
          <img
            src="/Images/dots.png"
            alt=""
            className="absolute -top-4 left-0 w-10"
          />

          {/* Plane */}
          <img
            src="/Images/paper-plane.png"
            alt=""
            className="absolute top-10 right-4 w-6"
          />

          <h2
            className="text-[44px] leading-11 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Relive the Sweet
            <br />
            Memories of Classic
            <br />
            <span className="text-[#F83D8E]">
              Ice Creams
            </span>
          </h2>

          <p
            className="mt-5 w-95 text-[14px] leading-5 text-[#555]"
            style={{ fontFamily: "Archivo" }}
          >
            From rich chocolate fudge to creamy vanilla sundaes,
            discover our menu of classic ice cream creations.
          </p>

          <button
            className="mt-6 w-40 h-11 rounded-[30px] text-white text-[13px]"
            style={{
              background: "#F83D8E",
              boxShadow: "0px 3px 22px 3px #F83D8E4F",
              fontFamily: "Archivo",
            }}
          >
            Explore Our Menu →
          </button>

        </div>

      </div>

      {/* Bottom decoration */}
      <img
        src="/Images/bottom-circle.png"
        alt=""
        className="absolute bottom-0 right-0 w-22"
      />

    </section>
  );
};

export default AboutPreview;