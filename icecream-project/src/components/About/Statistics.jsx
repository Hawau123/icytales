const statistics = [
  {
    value: "91",
    symbol: "+",
    label: "Awards Won",
  },
  {
    value: "95",
    symbol: "%",
    label: "Satisfied Clients",
  },
  {
    value: "48",
    symbol: "+",
    label: "Years of Experience",
  },
  {
    value: "143",
    symbol: "+",
    label: "Employees Working",
  },
];

const Statistics = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-250 px-6">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200] sm:text-[42px] sm:leading-10.5"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our <span className="text-[#F83D8E]">Statistics</span>
          </h2>

          <p
            className="mt-3 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            What makes us special through our impressive statistics.
          </p>
        </div>

        {/* Statistic cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="
                relative flex h-32 flex-col items-center justify-center
                overflow-hidden rounded-[10px] bg-white
                shadow-[0_8px_24px_rgba(0,0,0,0.05)]
              "
            >
              <h3
                className="flex items-start text-[30px] leading-none text-[#0F0200]"
                style={{ fontFamily: "Berkshire Swash" }}
              >
                {statistic.value}

                <span
                  className="ml-1 text-[14px] leading-none text-[#F83D8E]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {statistic.symbol}
                </span>
              </h3>

              <p
                className="mt-4 text-[10px] text-[#666]"
                style={{ fontFamily: "Archivo" }}
              >
                {statistic.label}
              </p>

              {/* Pink bottom border */}
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#F83D8E]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;