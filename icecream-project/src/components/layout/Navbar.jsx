import { useState } from "react";
import { useCart} from "../../context/CartContext";  
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const { cartCount } = useCart(); // Access cartCount from the context

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F83D8E]"
      : "text-[#0F0200] transition-colors hover:text-[#F83D8E]";

  const dropdownLinkClass = ({ isActive }) =>
    `block px-5 py-3 text-[14px] transition-colors hover:bg-[#FFF1F7] hover:text-[#F83D8E] ${
      isActive ? "text-[#F83D8E]" : "text-[#0F0200]"
    }`;

  const mobileDropdownLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2 text-[#F83D8E]"
      : "block py-2 text-[#0F0200] transition-colors hover:text-[#F83D8E]";

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsTeamOpen(false);
    setIsPagesOpen(false);
  };

  const closeDesktopDropdowns = () => {
    setIsTeamOpen(false);
    setIsPagesOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-white px-4 py-4">
      <nav className="mx-auto flex h-17.5 w-full max-w-354.25 items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeDesktopDropdowns}
          className="flex shrink-0 items-center"
        >
          <img
            src="/Images/logo1.png"
            alt="IcyTales"
            className="h-15 w-11.5 object-contain sm:h-17.5 sm:w-13.5"
          />

          <span
            className="text-[28px] leading-none text-[#C23E82] sm:text-[32px]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Icy
          </span>

          <span
            className="text-[28px] leading-none text-[#683292] sm:text-[32px]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Tales
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <ul
          className="hidden items-center gap-8 text-[16px] leading-4 lg:flex"
          style={{ fontFamily: "Archivo", fontWeight: 400 }}
        >
          <li>
            <NavLink
              to="/"
              end
              onClick={closeDesktopDropdowns}
              className={navLinkClass}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeDesktopDropdowns}
              className={navLinkClass}
            >
              About Us
            </NavLink>
          </li>

          {/* Team dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => {
                setIsTeamOpen((current) => !current);
                setIsPagesOpen(false);
              }}
              className="flex items-center gap-1 transition-colors hover:text-[#F83D8E]"
              aria-expanded={isTeamOpen}
            >
              Team

              <FiChevronDown
                className={`text-[16px] transition-transform ${
                  isTeamOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isTeamOpen && (
              <div
                className="
                  absolute left-1/2 top-8 z-50
                  w-44 -translate-x-1/2
                  overflow-hidden rounded-xl bg-white py-2
                  shadow-[0_12px_32px_rgba(0,0,0,0.14)]
                "
              >
                <NavLink
                  to="/team"
                  onClick={() => setIsTeamOpen(false)}
                  className={dropdownLinkClass}
                >
                  Our Team
                </NavLink>
              </div>
            )}
          </li>

          {/* Pages dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => {
                setIsPagesOpen((current) => !current);
                setIsTeamOpen(false);
              }}
              className="flex items-center gap-1 transition-colors hover:text-[#F83D8E]"
              aria-expanded={isPagesOpen}
            >
              Pages

              <FiChevronDown
                className={`text-[16px] transition-transform ${
                  isPagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isPagesOpen && (
              <div
                className="
                  absolute left-1/2 top-8 z-50
                  w-48 -translate-x-1/2
                  overflow-hidden rounded-xl bg-white py-2
                  shadow-[0_12px_32px_rgba(0,0,0,0.14)]
                "
              >
                <NavLink
                  to="/shop"
                  onClick={() => setIsPagesOpen(false)}
                  className={dropdownLinkClass}
                >
                  Shop
                </NavLink>

                <NavLink
                  to="/product/classic-vanilla"
                  onClick={() => setIsPagesOpen(false)}
                  className={dropdownLinkClass}
                >
                  Product Details
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/login"
              onClick={closeDesktopDropdowns}
              className={navLinkClass}
            >
              Login
            </NavLink>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-8 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="transition hover:text-[#F83D8E]"
          >
            <FiSearch size={28} />
          </button>

          {/* Cart link */}
          <NavLink
            to="/cart"
            onClick={closeDesktopDropdowns}
            aria-label="Shopping Cart"
            className="relative transition hover:text-[#F83D8E]"
          >
            <FiShoppingBag size={28} />

            <span
              className="
                absolute -bottom-2 -right-2
                flex h-5 min-w-5 items-center justify-center
                rounded-full bg-[#683292]
                px-1 text-[10px] font-semibold text-white
                shadow-md
              "
              style={{ fontFamily: "Archivo" }}
            >
              {cartCount}
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeDesktopDropdowns}
            className="flex h-13 w-42 items-center justify-center rounded-[30px] bg-[#F83D8E] font-medium text-white"
            style={{
              boxShadow: "0px 3px 22px 3px #F83D8E4F",
              fontFamily: "Archivo",
            }}
          >
            Contact Us →
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((previous) => !previous);
            setIsTeamOpen(false);
            setIsPagesOpen(false);
          }}
          className="flex items-center justify-center lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-black/5 bg-white px-6 py-6 shadow-lg lg:hidden">
          <ul
            className="flex flex-col gap-5 text-[16px]"
            style={{ fontFamily: "Archivo", fontWeight: 400 }}
          >
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={navLinkClass}
              >
                About Us
              </NavLink>
            </li>

            {/* Mobile Team dropdown */}
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsTeamOpen((current) => !current);
                  setIsPagesOpen(false);
                }}
                className="flex w-full items-center justify-between transition-colors hover:text-[#F83D8E]"
                aria-expanded={isTeamOpen}
              >
                <span>Team</span>

                <FiChevronDown
                  className={`transition-transform ${
                    isTeamOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isTeamOpen && (
                <div className="mt-4 border-l-2 border-[#F83D8E] pl-4">
                  <NavLink
                    to="/team"
                    onClick={closeMobileMenu}
                    className={mobileDropdownLinkClass}
                  >
                    Our Team
                  </NavLink>
                </div>
              )}
            </li>

            {/* Mobile Pages dropdown */}
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsPagesOpen((current) => !current);
                  setIsTeamOpen(false);
                }}
                className="flex w-full items-center justify-between transition-colors hover:text-[#F83D8E]"
                aria-expanded={isPagesOpen}
              >
                <span>Pages</span>

                <FiChevronDown
                  className={`transition-transform ${
                    isPagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isPagesOpen && (
                <div className="mt-4 border-l-2 border-[#F83D8E] pl-4">
                  <NavLink
                    to="/shop"
                    onClick={closeMobileMenu}
                    className={mobileDropdownLinkClass}
                  >
                    Shop
                  </NavLink>

                  <NavLink
                    to="/product-details"
                    onClick={closeMobileMenu}
                    className={mobileDropdownLinkClass}
                  >
                    Product Details
                  </NavLink>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/login"
                onClick={closeMobileMenu}
                className={navLinkClass}
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Mobile actions */}
          <div className="mt-6 flex items-center gap-6">
            <button
              type="button"
              aria-label="Search"
              className="transition hover:text-[#F83D8E]"
            >
              <FiSearch size={24} />
            </button>

            {/* Mobile cart link */}
            <NavLink
              to="/cart"
              onClick={closeMobileMenu}
              aria-label="Shopping Cart"
              className="relative transition hover:text-[#F83D8E]"
            >
              <FiShoppingBag size={24} />

              <span
                className="
                  absolute -bottom-1.5 -right-1.5
                  flex h-4 min-w-4 items-center justify-center
                  rounded-full bg-[#683292]
                  px-1 text-[8px] font-semibold text-white
                "
                style={{ fontFamily: "Archivo" }}
              >
                {cartCount}
              </span>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className="flex h-11 w-36 items-center justify-center rounded-full bg-[#F83D8E] text-[13px] font-medium text-white"
              style={{ fontFamily: "Archivo" }}
            >
              Contact Us →
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;