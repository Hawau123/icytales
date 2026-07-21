import { useState } from "react";
import {
  FaChevronRight,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const relatedProducts = [
  {
    image: "/Images/strawberry-sundae.png",
    name: "Strawberry Sundae",
    desc: "Strawberry ice cream with fresh strawberries.",
    price: "$5.99",
    bg: "#FFEFF0",
    imageClass: "w-30",
  },
  {
    image: "/Images/chocolate-chip-cookie-cone.png",
    name: "Chocolate Chip Cookie Cone",
    desc: "Chocolate chip cookie dough ice cream in a cone.",
    price: "$4.49",
    bg: "#FFF3EA",
    imageClass: "w-22",
  },
  {
    image: "/Images/rocky-road-sundae.png",
    name: "Rocky Road Sundae",
    desc: "Marshmallow and nutty rocky road ice cream.",
    price: "$5.69",
    bg: "#F8EBE4",
    imageClass: "w-30",
  },
  {
    image: "/Images/40.png",
    name: "Peach Melba Sundae",
    desc: "Peach ice cream topped with raspberry sauce.",
    price: "$5.39",
    bg: "#FFEFD8",
    imageClass: "w-30",
  },
];

const RelatedProducts = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productName) => {
    setWishlist((current) =>
      current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName]
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current === 2 ? 0 : current + 1));
  };

  return (
    <section className="w-full py-6">
      {/* Heading */}
      <div className="text-center">
        <h2
          className="
            text-[38px] leading-10 text-[#0F0200]
            sm:text-[44px] sm:leading-11
          "
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Related <span className="text-[#F83D8E]">Products</span>
        </h2>

        <p
          className="mt-3 text-[12px] text-[#666]"
          style={{ fontFamily: "Archivo" }}
        >
          Choose from some of related products
        </p>
      </div>

      {/* Product cards */}
      <div
        className="
          mx-auto mt-10 grid w-full max-w-220
          grid-cols-1 gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {relatedProducts.map((product) => {
          const isSaved = wishlist.includes(product.name);

          return (
            <article
              key={product.name}
              className="
                group flex min-h-86 flex-col
                overflow-hidden rounded-xl
                bg-white p-2
                shadow-[0_7px_22px_rgba(0,0,0,0.07)]
                transition duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Image */}
              <div
                className="
                  relative flex h-47 items-center justify-center
                  overflow-hidden rounded-lg
                "
                style={{ backgroundColor: product.bg }}
              >
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.name)}
                  aria-label={`Add ${product.name} to wishlist`}
                  className="
                    absolute left-2 top-2 z-10
                    flex h-7 w-7 items-center justify-center
                    rounded-full bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.1)]
                  "
                >
                  <img
                    src="/Images/heart.png"
                    alt=""
                    className={`
                      h-3 w-3 object-contain transition
                      ${isSaved ? "scale-110 opacity-100" : "opacity-80"}
                    `}
                  />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className={`
                    ${product.imageClass}
                    max-h-38 object-contain
                    transition duration-300
                    group-hover:scale-105
                  `}
                />
              </div>

              {/* Product content */}
              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="
                      max-w-30 text-[12px] font-bold
                      leading-4 text-[#0F0200]
                    "
                    style={{ fontFamily: "Archivo" }}
                  >
                    {product.name}
                  </h3>

                  <div className="flex shrink-0 items-center gap-1">
                    <FaStar className="text-[#FFB800]" size={8} />

                    <span
                      className="text-[7px] text-[#0F0200]"
                      style={{ fontFamily: "Archivo" }}
                    >
                      4.9/5
                    </span>
                  </div>
                </div>

                <p
                  className="mt-3 text-[8px] leading-3.5 text-[#666]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {product.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span
                    className="text-[12px] font-bold text-[#F83D8E]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {product.price}
                  </span>

                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full bg-[#683292]
                      text-white transition
                      hover:bg-[#F83D8E]
                    "
                  >
                    <FaShoppingCart size={10} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => setActiveSlide(dot)}
            aria-label={`Show related products slide ${dot + 1}`}
            className={`
              h-2.5 w-2.5 rounded-full transition
              ${
                activeSlide === dot
                  ? "bg-[#F83D8E]"
                  : "bg-[#D9D9D9]"
              }
            `}
          />
        ))}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next related products slide"
          className="
            ml-1 hidden h-7 w-7 items-center justify-center
            rounded-full bg-[#F83D8E]
            text-white transition hover:bg-[#683292]
          "
        >
          <FaChevronRight size={8} />
        </button>
      </div>
    </section>
  );
};

export default RelatedProducts;