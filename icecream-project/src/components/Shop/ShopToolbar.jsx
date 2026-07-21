import { FiGrid, FiList, FiSearch, FiX } from "react-icons/fi";

const ShopToolbar = ({
  searchInput,
  setSearchInput,
  handleSearch,
  clearSearch,
  sortOption,
  setSortOption,
  resultCount,
}) => {
  return (
    <div
      className="
        grid items-center gap-6
        lg:grid-cols-[220px_minmax(0,1fr)]
        lg:gap-10
      "
    >
      {/* Search — aligned above categories */}
      <form onSubmit={handleSearch} className="relative w-full">
        <FiSearch
          className="
            pointer-events-none absolute left-4 top-1/2
            -translate-y-1/2 text-[#888]
          "
          size={18}
        />

        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Search"
          className="
            h-12 w-full rounded-[30px]
            border border-[#E5E5E5]
            bg-white pl-12 pr-10
            text-[13px] text-[#0F0200]
            outline-none transition
            placeholder:text-[#888]
            focus:border-[#F83D8E]
          "
          style={{ fontFamily: "Archivo" }}
        />

        {searchInput && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              absolute right-4 top-1/2
              -translate-y-1/2 text-[#999]
              transition hover:text-[#F83D8E]
            "
          >
            <FiX size={15} />
          </button>
        )}
      </form>

      {/* Product controls */}
      <div
        className="
          flex flex-col gap-5
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        <div className="flex flex-wrap items-center gap-7">
          {/* Grid/List toggle */}
          <div className="flex overflow-hidden rounded-lg">
            <button
              type="button"
              aria-label="Grid view"
              className="
                flex h-12 w-12 items-center justify-center
                bg-[#F83D8E] text-white
              "
            >
              <FiGrid size={21} />
            </button>

            <button
              type="button"
              aria-label="List view"
              className="
                flex h-12 w-12 items-center justify-center
                bg-[#EFF7F7] text-[#879797]
                transition hover:text-[#F83D8E]
              "
            >
              <FiList size={21} />
            </button>
          </div>

          {/* Result text */}
          <p
            className="text-[13px] text-[#777]"
            style={{ fontFamily: "Archivo" }}
          >
            Showing 1–{Math.min(18, resultCount)} of {resultCount} results
          </p>
        </div>

        {/* Sorting */}
        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
          className="
            h-12 min-w-44 rounded-[30px]
            border border-[#E5E5E5]
            bg-white px-5
            text-[12px] text-[#333]
            outline-none
            focus:border-[#F83D8E]
          "
          style={{ fontFamily: "Archivo" }}
        >
          <option value="default">Default Sorting</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
};

export default ShopToolbar;