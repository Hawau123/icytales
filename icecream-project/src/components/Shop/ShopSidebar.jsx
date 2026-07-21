const categories = [
  "Classic Vanilla",
  "Fruit Flavors",
  "Ice Cream Cakes",
  "Milkshakes",
  "Frozen Yogurt",
  "Sundaes",
];

const featuredProducts = [
  {
    image: "/Images/rocky-road-sundae.png",
    name: "Rocky Road Sundae",
    price: "$4.99",
  },
  {
    image: "/Images/40.png",
    name: "Peach Milkshake",
    price: "$5.49",
  },
  {
    image: "/Images/vanilla-cone.png",
    name: "Classic Vanilla",
    price: "$4.99",
  },
  {
    image: "/Images/strawberry-shortcake.png",
    name: "Strawberry Cake",
    price: "$6.99",
  },
];

const ShopSidebar = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <aside className="space-y-10">
      {/* Categories */}
      <div>
        <h3
          className="mb-5 text-[18px] text-[#0F0200]"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Categories
        </h3>

        <ul className="space-y-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="
                    group flex w-full items-center gap-3
                    text-left transition
                  "
                >
                  {/* Your saved Border image */}
                  <span className="relative h-6 w-6 shrink-0">
                    <img
                      src="/Images/Border.png"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />

                    {isActive && (
                      <span
                        className="
                          absolute left-1/2 top-1/2
                          h-3 w-3 -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-[#F83D8E]
                        "
                      />
                    )}
                  </span>

                  <span
                    className={`
                      text-[13px] transition
                      ${
                        isActive
                          ? "font-medium text-[#F83D8E]"
                          : "text-[#666] group-hover:text-[#F83D8E]"
                      }
                    `}
                    style={{ fontFamily: "Archivo" }}
                  >
                    {category}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Filter by price */}
      <div className="mt-10">
        <h3
          className="text-[20px] leading-none text-[#0F0200]"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Filter By Price
        </h3>

        <p
          className="mt-9 text-[12px] text-[#666]"
          style={{ fontFamily: "Archivo" }}
        >
          Range:
          <span className="ml-4 text-[#F83D8E]">5$ - 50$</span>
        </p>
      </div>

      {/* Featured products */}
      <div>
        <h3
          className="mb-5 text-[18px] text-[#0F0200]"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Featured Products
        </h3>

        <div className="space-y-5">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="flex items-center gap-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-contain"
              />

              <div>
                <h4
                  className="text-[13px] font-semibold text-[#0F0200]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {product.name}
                </h4>

                <p
                  className="mt-1 text-[13px] text-[#F83D8E]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;