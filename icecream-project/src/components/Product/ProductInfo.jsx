import { useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const colors = [
  { name: "Pink", value: "#F83D8E" },
  { name: "Brown", value: "#8B5E3C" },
  { name: "Green", value: "#89C56D" },
];

const sizes = ["S", "M", "L", "XL"];

const ProductInfo = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { addToCart } = useCart();

  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increase = () => {
    setQuantity((current) => current + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      image: product.image,
      name: product.name,
      desc: product.desc,
      price: product.price,
      color: selectedColor.name,
      size: selectedSize,
      quantity,
    });

    setMessage(`${product.name} added to cart!`);

    window.setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <div className="flex text-[#FFB800]">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} size={14} />
          ))}
        </div>

        <span
          className="text-[13px] text-[#666]"
          style={{ fontFamily: "Archivo" }}
        >
          4.9/5
        </span>
      </div>

      <h1
        className="mt-5 text-[42px] leading-tight text-[#0F0200] lg:text-[54px]"
        style={{ fontFamily: "Berkshire Swash" }}
      >
        {product.name}
      </h1>

      <p
        className="mt-6 text-[34px] font-bold text-[#683292]"
        style={{ fontFamily: "Archivo" }}
      >
        ${product.price.toFixed(2)}
      </p>

      <p
        className="mt-6 max-w-xl text-[15px] leading-8 text-[#666]"
        style={{ fontFamily: "Archivo" }}
      >
        {product.longDescription}
      </p>

      <div className="mt-10">
        <h3
          className="text-[17px] font-semibold text-[#0F0200]"
          style={{ fontFamily: "Archivo" }}
        >
          Color
        </h3>

        <div className="mt-4 flex gap-4">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color.name}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${
                selectedColor.name === color.name
                  ? "border-[#F83D8E]"
                  : "border-[#E5E5E5]"
              }`}
            >
              <span
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: color.value }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3
          className="text-[17px] font-semibold text-[#0F0200]"
          style={{ fontFamily: "Archivo" }}
        >
          Size
        </h3>

        <div className="mt-4 flex gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`flex h-11 w-11 items-center justify-center rounded-lg border transition ${
                selectedSize === size
                  ? "border-[#F83D8E] bg-[#F83D8E] text-white"
                  : "border-[#E5E5E5] text-[#666]"
              }`}
              style={{ fontFamily: "Archivo" }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <div className="flex h-14 items-center rounded-full border border-[#E5E5E5] px-3">
          <button
            type="button"
            onClick={decrease}
            aria-label="Decrease quantity"
            className="flex h-10 w-10 items-center justify-center text-[#666]"
          >
            <FaMinus size={12} />
          </button>

          <span
            className="w-10 text-center text-[18px]"
            style={{ fontFamily: "Archivo" }}
          >
            {quantity}
          </span>

          <button
            type="button"
            onClick={increase}
            aria-label="Increase quantity"
            className="flex h-10 w-10 items-center justify-center text-[#666]"
          >
            <FaPlus size={12} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="
            rounded-full bg-[#F83D8E]
            px-10 py-4 text-white
            shadow-[0_7px_20px_rgba(248,61,142,0.25)]
            transition hover:bg-[#683292]
          "
          style={{ fontFamily: "Archivo" }}
        >
          Add To Cart →
        </button>
      </div>

      {message && (
        <p
          className="mt-4 text-[13px] font-medium text-[#F83D8E]"
          style={{ fontFamily: "Archivo" }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ProductInfo;