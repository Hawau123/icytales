import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronRight,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const ShopProducts = ({ products = [], filterKey = "" }) => {
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsTopRef = useRef(null);
  const previousFilterKey = useRef(filterKey);

  const productsPerPage = 6;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    if (previousFilterKey.current !== filterKey) {
      const frame = requestAnimationFrame(() => {
        setCurrentPage(1);
      });

      previousFilterKey.current = filterKey;

      return () => cancelAnimationFrame(frame);
    }
  }, [filterKey]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const visibleProducts = products.slice(startIndex, endIndex);

  const toggleWishlist = (cardId) => {
    setWishlist((current) =>
      current.includes(cardId)
        ? current.filter((id) => id !== cardId)
        : [...current, cardId]
    );
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);

    requestAnimationFrame(() => {
      productsTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  if (products.length === 0) {
    return (
      <div
        ref={productsTopRef}
        className="
          flex min-h-80 items-center justify-center
          rounded-[20px] bg-[#FFF6FB]
          px-6 text-center
        "
      >
        <div>
          <h3
            className="text-[30px] text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            No products found
          </h3>

          <p
            className="mt-3 text-[13px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Try another search or select a different category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={productsTopRef}
      className="min-w-0 scroll-mt-28"
    >
      {/* Three cards per row, six products per page */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => {
          const uniqueCardId = product.cardId ?? product.id;
          const isSaved = wishlist.includes(uniqueCardId);

          return (
            <Link
              key={uniqueCardId}
              to={`/product/${product.id}`}
              className="block"
            >
              <article
                className="
                  group flex min-h-102 w-full flex-col
                  overflow-hidden rounded-xl
                  bg-white p-2
                  shadow-[0_8px_24px_rgba(0,0,0,0.07)]
                  transition duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* Image panel */}
                <div
                  className="
                    relative flex h-52 items-center justify-center
                    overflow-hidden rounded-lg
                  "
                  style={{ backgroundColor: product.bg }}
                >
                  {/* Wishlist button */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      toggleWishlist(uniqueCardId);
                    }}
                    aria-label={`Add ${product.name} to wishlist`}
                    className="
                      absolute left-2 top-2 z-10
                      flex h-8 w-8 items-center justify-center
                      rounded-full bg-white
                      shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    "
                  >
                    <img
                      src="/Images/heart.png"
                      alt=""
                      className={`
                        h-3.5 w-3.5 object-contain transition
                        ${
                          isSaved
                            ? "scale-110 opacity-100"
                            : "opacity-75"
                        }
                      `}
                    />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    className={`
                      ${product.imageClass}
                      max-h-44 max-w-full object-contain
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
                        max-w-36 text-[13px] font-bold
                        leading-4 text-[#0F0200]
                      "
                      style={{ fontFamily: "Archivo" }}
                    >
                      {product.name}
                    </h3>

                    <div className="flex shrink-0 items-center gap-1">
                      <FaStar
                        className="text-[#FFB800]"
                        size={9}
                      />

                      <span
                        className="text-[8px] text-[#0F0200]"
                        style={{ fontFamily: "Archivo" }}
                      >
                        4.9/5
                      </span>
                    </div>
                  </div>

                  <p
                    className="mt-3 text-[9px] leading-3.5 text-[#666]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {product.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span
                      className="text-[13px] font-bold text-[#F83D8E]"
                      style={{ fontFamily: "Archivo" }}
                    >
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        // Add-to-cart logic will go here.
                      }}
                      aria-label={`Add ${product.name} to cart`}
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full bg-[#683292]
                        text-white transition
                        hover:bg-[#F83D8E]
                      "
                    >
                      <FaShoppingCart size={12} />
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          className="mt-10 flex w-full items-center justify-center gap-2"
          aria-label="Shop pagination"
        >
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = currentPage === pageNumber;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => changePage(pageNumber)}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex h-8 w-8 items-center justify-center
                  rounded-full text-[11px] transition
                  ${
                    isActive
                      ? "bg-[#F83D8E] text-white"
                      : "border border-[#E8E8E8] bg-white text-[#777] hover:border-[#F83D8E] hover:text-[#F83D8E]"
                  }
                `}
                style={{ fontFamily: "Archivo" }}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => {
              if (currentPage < totalPages) {
                changePage(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`
              flex h-8 w-8 items-center justify-center
              rounded-full transition
              ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-[#F8A8CA] text-white"
                  : "bg-[#F83D8E] text-white hover:bg-[#683292]"
              }
            `}
          >
            <FaChevronRight size={9} />
          </button>
        </nav>
      )}
    </div>
  );
};

export default ShopProducts;