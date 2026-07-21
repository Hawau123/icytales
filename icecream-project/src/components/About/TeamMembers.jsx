import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const teamMembers = [
  {
    image: "/Images/110.png",
    name: "Marvin Joner",
    role: "Bakery Worker",
  },
  {
    image: "/Images/112.png",
    name: "Patricia Woodrum",
    role: "Staff Worker",
  },
  {
    image: "/Images/114.png",
    name: "Hannaz Stone",
    role: "Shop Worker",
  },

  // Duplicate members for the second slide
  {
    image: "/Images/110.png",
    name: "Martin Joel",
    role: "Dessert Specialist",
  },
  {
    image: "/Images/112.png",
    name: "Sophia Warren",
    role: "Customer Assistant",
  },
  {
    image: "/Images/114.png",
    name: "Daniel Stone",
    role: "Ice Cream Maker",
  },
];

const TeamMembers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    teamMembers.slice(0, 3),
    teamMembers.slice(3, 6),
  ];

  const visibleMembers = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(301.26deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)",
      }}
    >
      <div className="mx-auto w-full max-w-250 px-6">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200] sm:text-[42px] sm:leading-10.5"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our <span className="text-[#F83D8E]">Team</span> Members
          </h2>

          <p
            className="mt-3 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Get to know the friendly faces behind your favorite flavors.
          </p>
        </div>

        {/* Slider area */}
        <div className="relative mt-10">
          {/* Previous button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous team members"
            className="
              absolute left-0 top-28 z-20
              hidden h-9 w-9 items-center justify-center
              rounded-full bg-white text-[#0F0200]
              shadow-[0_6px_18px_rgba(0,0,0,0.08)]
              transition hover:bg-[#F83D8E] hover:text-white
              lg:flex
            "
          >
            <FaArrowLeft size={13} />
          </button>

          {/* Team cards */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
            {visibleMembers.map((member) => (
              <article
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="h-44 w-44 overflow-hidden rounded-full sm:h-48 sm:w-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3
                  className="mt-5 text-[16px] font-bold text-[#0F0200]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {member.name}
                </h3>

                <p
                  className="mt-1 text-[10px] text-[#777]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {member.role}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="#"
                    aria-label={`${member.name} on Facebook`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                  >
                    <FaFacebookF size={11} />
                  </a>

                  <a
                    href="#"
                    aria-label={`${member.name} on Instagram`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                  >
                    <FaInstagram size={11} />
                  </a>

                  <a
                    href="#"
                    aria-label={`${member.name} on YouTube`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                  >
                    <FaYoutube size={11} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next team members"
            className="
              absolute right-0 top-28 z-20
              hidden h-9 w-9 items-center justify-center
              rounded-full bg-white text-[#0F0200]
              shadow-[0_6px_18px_rgba(0,0,0,0.08)]
              transition hover:bg-[#F83D8E] hover:text-white
              lg:flex
            "
          >
            <FaArrowRight size={13} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mt-10 flex justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous team members"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <FaArrowLeft size={13} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next team members"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          >
            <FaArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;