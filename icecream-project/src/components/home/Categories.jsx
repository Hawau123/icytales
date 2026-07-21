import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    image: "/Images/sundaes.png",
    title: "Sundaes",
  },
  {
    image: "/Images/ice-cream-cones.png",
    title: "Ice Cream Cones",
  },
  {
    image: "/Images/milkshakes.png",
    title: "Milkshakes",
  },
  {
    image: "/Images/seasonal-flavors.png",
    title: "Seasonal Flavors",
  },
];

const Categories = () => {
  return (
    <section className="w-full bg-white py-18">
      <div className="max-w-250 mx-auto px-6">
        <div className="text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Explore Our <span className="text-[#F83D8E]">Categories</span>
          </h2>

          <p
            className="mt-2 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Browse through our different categories to find your favorite ice
            cream treats.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <div
              key={category.title}
              className="relative h-60 rounded-[10px] overflow-hidden shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute left-2 right-2 bottom-2 h-10 bg-white rounded-lg flex items-center justify-between px-4">
                <h3
                  className="text-[12px] font-bold text-[#0F0200]"
                  style={{ fontFamily: "Archivo" }}
                >
                  {category.title}
                </h3>

                <button className="w-7 h-7 rounded-full bg-[#F83D8E] text-white flex items-center justify-center text-[14px]">
                  <FaArrowRight color="white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;