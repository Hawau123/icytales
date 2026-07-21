import { NavLink } from "react-router-dom";

const TeamHero = () => {
  return (
    <section
      className="flex min-h-64 w-full items-center justify-center px-6 py-16 lg:min-h-72"
      style={{
        background:
          "linear-gradient(301.26deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)",
      }}
    >
      <div className="text-center">
        <h1
          className="text-[44px] leading-none text-[#0F0200] sm:text-[52px] lg:text-[60px]"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Our Team
        </h1>

        <div
          className="mx-auto mt-6 flex h-9 w-fit items-center gap-3 rounded-full bg-white px-5 text-[11px] shadow-[0_6px_20px_rgba(0,0,0,0.04)] sm:text-[12px]"
          style={{ fontFamily: "Archivo" }}
        >
          <NavLink
            to="/"
            className="text-[#F83D8E] transition hover:text-[#683292]"
          >
            Home
          </NavLink>

          <span className="text-[#999]">/</span>
          <span className="text-[#0F0200]">Team</span>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;