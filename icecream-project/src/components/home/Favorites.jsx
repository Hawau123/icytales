import { useState } from "react";

const products = [
  {
    image: "/Images/brownie-sundae.png",
    name: "Chocolate Brownie Sundae",
    desc: "Rich chocolate ice cream with chunks of brownie.",
    price: "$5.49",
    bg: "#F7F2FA",
    imgClass: "w-32",
  },
  {
    image: "/Images/strawberry-shortcake.png",
    name: "Strawberry Shortcake",
    desc: "Strawberry ice cream layered with shortcake.",
    price: "$5.29",
    bg: "#FFF2F6",
    imgClass: "w-30",
  },
  {
    image: "/Images/mint-cone.png",
    name: "Mint Chocolate Chip Cone",
    desc: "Refreshing mint ice cream with chocolate chips.",
    price: "$3.99",
    bg: "#F5FBEA",
    imgClass: "w-26",
  },
  {
    image: "/Images/vanilla-cone.png",
    name: "Classic Vanilla Ice Cream",
    desc: "Creamy vanilla ice cream topped with cherry.",
    price: "$4.99",
    bg: "#FFFDFB",
    imgClass: "w-20",
  },

  {
    image: "/Images/brownie-sundae.png",
    name: "Double Chocolate Decadence Sundae",
    desc: "Piled high over warm, chewy double-chocolate brownie chunks.",
    price: "$7.49",
    bg: "#F7F2FA",
    imgClass: "w-32",
  },
  {
    image: "/Images/strawberry-shortcake.png",
    name: "Classic Berry Sponge Stack",
    desc: "Strawberry ice cream layered with Light, airy sponge cake layered with velvety strawberry cream.",
    price: "$5.29",
    bg: "#FFF2F6",
    imgClass: "w-30",
  },
  {
    image: "/Images/mint-cone.png",
    name: "Peppermint Choco Crunch Cone",
    desc: "Cool, refreshing peppermint ice cream packed with bittersweet chocolate chips.",
    price: "$4.99",
    bg: "#F5FBEA",
    imgClass: "w-26",
  },
  {
    image: "/Images/vanilla-cone.png",
    name: "Traditional Vanilla Swirl Cone",
    desc: "Creamy vanilla ice cream topped with cherry and finished with a glossy chocolate drizzle.",
    price: "$6.99",
    bg: "#FFFDFB",
    imgClass: "w-20",
  },
];

const Favorites = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const cardsPerSlide = 4;

  const slides = [
    products.slice(0, cardsPerSlide),
    products.slice(cardsPerSlide, cardsPerSlide * 2),
    products.slice(0, cardsPerSlide),
  ];

  const totalSlides = slides.length;

  const visibleProducts = slides[activeSlide];

  return (
    <section
      className="relative w-full overflow-hidden pt-16 pb-20"
      style={{
        background:
          "linear-gradient(301.26deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)",
      }}
    >
      <img
        src="/Images/favorite-left.png"
        alt=""
        className="hidden xl:block absolute left-0 top-16 w-44 z-0 pointer-events-none select-none"
      />

      <img
        src="/Images/favorite-right.png"
        alt=""
        className="hidden xl:block absolute right-0 top-52 w-30 z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-250 mx-auto px-6">
        <div className="text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our <span className="text-[#F83D8E]">Classic</span> Favorites
          </h2>

          <p
            className="mt-2 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Check out our top products that our customers love.
          </p>
        </div>

        <div className="mt-9 flex justify-center gap-5 flex-wrap lg:flex-nowrap">
          {visibleProducts.map((product) => (
            <div
              key={product.name}
              className="w-46 h-66 rounded-[10px] bg-white p-1.5 shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
            >
              <div
                className="relative w-full h-32 rounded-md flex items-center justify-center overflow-hidden"
                style={{ background: product.bg }}
              >
                <button className="absolute top-2 left-2 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <img
                    src="/Images/heart.png"
                    alt=""
                    className="w-2.5 h-2.5 object-contain"
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className={`${product.imgClass} object-contain`}
                />
              </div>

              <div className="pt-2 h-29.5 flex flex-col">
                <div className="flex justify-between items-start gap-1">
                  <h3
                    className="text-[10px] leading-3 font-bold text-[#0F0200]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {product.name}
                  </h3>

                  <span
                    className="text-[8px] whitespace-nowrap"
                    style={{ fontFamily: "Archivo" }}
                  >
                    ⭐ 4.9/5
                  </span>
                </div>

                <p
                  className="mt-1.5 text-[8px] leading-3 text-[#666]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {product.desc}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold text-[#F83D8E]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {product.price}
                  </span>

                  <button className="w-5.5 h-5.5 rounded-full bg-[#683292] flex items-center justify-center">
                    <img
                      src="/Images/cart.png"
                      alt=""
                      className="w-3 h-3 object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeSlide === index ? "bg-[#F83D8E]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;