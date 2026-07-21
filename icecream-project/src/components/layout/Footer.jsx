import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#683292] text-white">
      {/* Faded left decoration */}
      <img
        src="/Images/footer-icecream.png"
        alt=""
        className="
          pointer-events-none absolute
          -bottom-10 -left-10
          w-44 opacity-20
          select-none
          sm:w-52
          lg:-bottom-14 lg:-left-12 lg:w-64
        "
      />

      <div className="relative z-10 mx-auto max-w-275 px-6 pt-16 pb-6">
        <div
          className="
            grid grid-cols-1 gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.1fr_1fr_1.2fr_1fr]
            lg:gap-12
          "
        >
          {/* Logo */}
          <div>
            <div className="flex items-center">
              <img
                src="/Images/logo1.png"
                alt="IcyTales"
                className="h-17.5 w-13.5 object-contain"
              />

              <h2
                className="text-[28px] leading-none text-[#F83D8E]"
                style={{ fontFamily: "Berkshire Swash" }}
              >
                Icy
              </h2>

              <h2
                className="text-[28px] leading-none text-white"
                style={{ fontFamily: "Berkshire Swash" }}
              >
                Tales
              </h2>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[16px] font-semibold"
              style={{ fontFamily: "Archivo" }}
            >
              Navigation
            </h3>

            <div
              className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] text-white/80"
              style={{ fontFamily: "Archivo" }}
            >
              <a href="#" className="hover:text-[#F83D8E]">
                Home
              </a>
              <a href="#" className="hover:text-[#F83D8E]">
                Products
              </a>
              <a href="#" className="hover:text-[#F83D8E]">
                About
              </a>
              <a href="#" className="hover:text-[#F83D8E]">
                Blog
              </a>
              <a href="#" className="hover:text-[#F83D8E]">
                Shop
              </a>
              <a href="#" className="hover:text-[#F83D8E]">
                Contact
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <FiMapPin className="text-[16px]" />
              </div>

              <div>
                <h3
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: "Archivo" }}
                >
                  Address:
                </h3>

                <p
                  className="mt-1 max-w-48 text-[11px] leading-4 text-white/70"
                  style={{ fontFamily: "Archivo" }}
                >
                  121 King Street Melbourne, 3000, Australia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <FiMail className="text-[16px]" />
              </div>

              <div>
                <h3
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: "Archivo" }}
                >
                  Email:
                </h3>

                <a
                  href="mailto:info@example.com"
                  className="mt-1 block text-[11px] text-white/70 hover:text-[#F83D8E]"
                  style={{ fontFamily: "Archivo" }}
                >
                  info@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone and social links */}
          <div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-[16px]" />

              <div>
                <a
                  href="tel:+123456780123"
                  className="text-[15px] font-semibold hover:text-[#F83D8E]"
                  style={{ fontFamily: "Archivo" }}
                >
                  +123456780123
                </a>

                <p
                  className="mt-1 text-[11px] text-white/70"
                  style={{ fontFamily: "Archivo" }}
                >
                  Got Questions? Call us 24/7
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F83D8E]"
              >
                <FaFacebookF className="text-[13px]" />
              </a>

              <a
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-full bg-white/10 transition hover:bg-[#F83D8E]"
              />

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F83D8E]"
              >
                <FaInstagram className="text-[13px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/15" />

        {/* Copyright */}
        <div className="mt-5 text-center">
          <p
            className="text-[10px] text-white/60"
            style={{ fontFamily: "Archivo" }}
          >
            Copyright © 2026 IcyTales. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          absolute bottom-8 right-6 z-20
          flex h-12 w-12 items-center justify-center
          rounded-md bg-[#F83D8E]
          text-white shadow-lg
          transition hover:-translate-y-1
          sm:right-10
          lg:right-16
        "
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;