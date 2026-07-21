import {
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
  {
    image: "/Images/116.png",
    name: "Elina James",
    role: "Bakery Worker",
  },
  {
    image: "/Images/118.png",
    name: "Kevin Andrew",
    role: "Staff Worker",
  },
  {
    image: "/Images/120.png",
    name: "Lauren Trout",
    role: "Shop Worker",
  },
];

const TeamGrid = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-250 px-6">
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

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
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
                  aria-label={`${member.name} Facebook`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                >
                  <FaFacebookF size={11} />
                </a>

                <a
                  href="#"
                  aria-label={`${member.name} Instagram`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                >
                  <FaInstagram size={11} />
                </a>

                <a
                  href="#"
                  aria-label={`${member.name} YouTube`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F83D8E] text-white transition hover:bg-[#683292]"
                >
                  <FaYoutube size={11} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;