import { useState } from "react";

const ProductGallery = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.gallery[0]);

  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-col sm:overflow-visible sm:pb-0">
        {product.thumbnailGallery.map((thumbnail, index) => {
          const largeImage = product.gallery[index];
          const isActive = activeImage === largeImage;

          return (
            <button
              key={`${thumbnail}-${index}`}
              type="button"
              onClick={() => setActiveImage(largeImage)}
              aria-label={`View ${product.name} image ${index + 1}`}
              className={`
                flex h-20 w-20 shrink-0 items-center justify-center
                overflow-hidden rounded-[10px] border-2
                bg-[#FFF8F3] transition
                ${
                  isActive
                    ? "border-[#F83D8E]"
                    : "border-transparent hover:border-[#F8A8CA]"
                }
              `}
            >
              <img
                src={thumbnail}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>

      <div
        className="
          flex min-h-105 flex-1 items-center justify-center
          overflow-hidden rounded-[14px] p-6
          sm:min-h-120
        "
        style={{ backgroundColor: product.bg }}
      >
        <img
          src={activeImage}
          alt={product.name}
          className="
            max-h-105 w-full object-contain
            transition duration-300
            sm:max-h-115
          "
        />
      </div>
    </div>
  );
};

export default ProductGallery;