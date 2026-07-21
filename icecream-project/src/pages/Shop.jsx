import { useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ShopHero from "../components/Shop/ShopHero";
import ShopToolbar from "../components/Shop/ShopToolbar";
import ShopSidebar from "../components/Shop/ShopSidebar";
import ShopProducts from "../components/Shop/ShopProducts";
import Footer from "../components/layout/Footer";

const baseProducts = [
  {
    id: "classic-vanilla",
    image: "/Images/vanilla-cone.png",
    name: "Classic Vanilla Ice Cream",
    desc: "Creamy vanilla ice cream topped with cherry.",
    price: 4.99,
    category: "Classic Vanilla",
    bg: "#FFF9F3",
    imageClass: "w-24 sm:w-28",
  },
  {
    id: "chocolate-brownie-sundae",
    image: "/Images/brownie-sundae.png",
    name: "Chocolate Brownie Sundae",
    desc: "Rich chocolate ice cream with chunks of brownie.",
    price: 5.49,
    category: "Sundaes",
    bg: "#F7F2FA",
    imageClass: "w-36 sm:w-40",
  },
  {
    id: "strawberry-shortcake",
    image: "/Images/strawberry-shortcake.png",
    name: "Strawberry Shortcake",
    desc: "Strawberry ice cream layered with shortcake.",
    price: 5.29,
    category: "Ice Cream Cakes",
    bg: "#FFF2F6",
    imageClass: "w-34 sm:w-38",
  },
  {
    id: "mint-chocolate-chip-cone",
    image: "/Images/mint-cone.png",
    name: "Mint Chocolate Chip Cone",
    desc: "Refreshing mint ice cream with chocolate chips.",
    price: 3.99,
    category: "Frozen Yogurt",
    bg: "#F5FBEA",
    imageClass: "w-28 sm:w-32",
  },
  {
    id: "strawberry-sundae",
    image: "/Images/strawberry-sundae.png",
    name: "Strawberry Sundae",
    desc: "Strawberry ice cream with fresh strawberries.",
    price: 5.99,
    category: "Fruit Flavors",
    bg: "#FFEFF0",
    imageClass: "w-32 sm:w-36",
  },
  {
    id: "chocolate-chip-cookie-cone",
    image: "/Images/chocolate-chip-cookie-cone.png",
    name: "Chocolate Chip Cookie Cone",
    desc: "Chocolate chip cookie dough ice cream in a cone.",
    price: 4.49,
    category: "Classic Vanilla",
    bg: "#FFF3EA",
    imageClass: "w-24 sm:w-28",
  },
  {
    id: "peach-melba-sundae",
    image: "/Images/40.png",
    name: "Peach Melba Sundae",
    desc: "Peach ice cream topped with raspberry sauce.",
    price: 5.39,
    category: "Fruit Flavors",
    bg: "#FFEFD8",
    imageClass: "w-32 sm:w-36",
  },
  {
    id: "rocky-road-sundae",
    image: "/Images/rocky-road-sundae.png",
    name: "Rocky Road Sundae",
    desc: "Chocolate ice cream with marshmallows and nuts.",
    price: 5.69,
    category: "Sundaes",
    bg: "#F8EBE4",
    imageClass: "w-36 sm:w-40",
  },
];

/*
  Duplicate the eight products three times to create 24 products.

  product.id remains unchanged because it is used in the
  Product Details URL.

  cardId is used only as the React key.

  originalOrder keeps the products in the correct visual order.
*/
const allProducts = Array.from({ length: 3 }, (_, copyIndex) =>
  baseProducts.map((product, productIndex) => ({
    ...product,
    cardId: `${product.id}-${copyIndex}`,
    originalOrder:
      copyIndex * baseProducts.length + productIndex,
  }))
).flat();

const Shop = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();

    const filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.desc.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((firstProduct, secondProduct) => {
      if (sortOption === "low-to-high") {
        return firstProduct.price - secondProduct.price;
      }

      if (sortOption === "high-to-low") {
        return secondProduct.price - firstProduct.price;
      }

      if (sortOption === "name") {
        return firstProduct.name.localeCompare(secondProduct.name);
      }

      return firstProduct.originalOrder - secondProduct.originalOrder;
    });
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <>
      <Navbar />
      <ShopHero />

      <section className="mx-auto w-full max-w-300 px-6 py-16">
        <ShopToolbar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          clearSearch={clearSearch}
          sortOption={sortOption}
          setSortOption={setSortOption}
          resultCount={filteredProducts.length}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <ShopSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="min-w-0">
            <ShopProducts
              products={filteredProducts}
              filterKey={`${searchTerm}-${selectedCategory}-${sortOption}`}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;