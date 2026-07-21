import { useState } from "react";

const products = [
  {
    image: "/Images/chocolate-chip-cookie-cone.png",
    name: "Chocolate Chip Cookie Cone",
    desc: "Chocolate chip cookie dough ice cream in a cone.",
    price: "$4.49",
    bg: "#FFF3EA",
    imgClass: "w-24",
  },
  {
    image: "/Images/rocky-road-sundae.png",
    name: "Rocky Road Sundae",
    desc: "Marshmallow and nutty rocky road ice cream.",
    price: "$5.69",
    bg: "#F8EBE4",
    imgClass: "w-24",
  },
  {
    image: "/Images/40.png",
    name: "Peach Melba Sundae",
    desc: "Peach ice cream topped with raspberry sauce.",
    price: "$5.39",
    bg: "#FFEFD8",
    imgClass: "w-28",
  },
  {
    image: "/Images/strawberry-sundae.png",
    name: "Strawberry Sundae",
    desc: "Strawberry ice cream with fresh strawberries.",
    price: "$5.99",
    bg: "#FFEFF0",
    imgClass: "w-28",
  },
  {
    image: "/Images/chocolate-chip-cookie-cone.png",
    name: "Double Chocolate Cookie Cone",
    desc: "Chocolate chip cookie dough ice cream in a cone.",
    price: "$4.49",
    bg: "#FFF3EA",
    imgClass: "w-24",
  },
  {
    image: "/Images/rocky-road-sundae.png",
    name: "Nutty Rocky Delight",
    desc: "Marshmallow and nutty rocky road ice cream.",
    price: "$5.69",
    bg: "#F8EBE4",
    imgClass: "w-24",
  },
  {
    image: "/Images/40.png",
    name: "Peach Berry Delight",
    desc: "Peach ice cream topped with raspberry sauce.",
    price: "$5.39",
    bg: "#FFEFD8",
    imgClass: "w-28",
  },
  {
    image: "/Images/strawberry-sundae.png",
    name: "Berry Bliss Sundae",
    desc: "Strawberry ice cream with fresh strawberries.",
    price: "$5.99",
    bg: "#FFEFF0",
    imgClass: "w-28",
  },
];

const BestSellers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    products.slice(0, 4),
    products.slice(4, 8),
    products.slice(0, 4),
  ];

  const visibleProducts = slides[activeSlide];

  return (
    <section className="w-full bg-white py-18">
      <div className="max-w-250 mx-auto px-6">
        <div className="text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Our <span className="text-[#F83D8E]">Best</span> Sellers
          </h2>

          <p
            className="mt-2 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Discover the favorites that keep our customers coming back for more.
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
          {slides.map((_, index) => (
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

export default BestSellers;