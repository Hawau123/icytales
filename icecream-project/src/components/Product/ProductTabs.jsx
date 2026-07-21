import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="mt-20">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-[#E9E9E9]">
        {[
          {
            id: "description",
            title: "Description",
          },
          {
            id: "information",
            title: "Additional Information",
          },
          {
            id: "reviews",
            title: "Reviews (2)",
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-7 py-4
              text-[15px]
              transition
              ${
                activeTab === tab.id
                  ? "border-b-2 border-[#F83D8E] text-[#F83D8E]"
                  : "text-[#777] hover:text-[#F83D8E]"
              }
            `}
            style={{ fontFamily: "Archivo" }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10">
        {activeTab === "description" && (
          <div>
            <h3
              className="text-[26px] text-[#0F0200]"
              style={{ fontFamily: "Berkshire Swash" }}
            >
              Product Description
            </h3>

            <p
              className="mt-6 leading-8 text-[#666]"
              style={{ fontFamily: "Archivo" }}
            >
              Our Classic Vanilla Ice Cream is handcrafted using fresh dairy,
              natural vanilla beans and premium ingredients. Every scoop is
              smooth, creamy and perfectly balanced for an unforgettable dessert
              experience.
            </p>

            <p
              className="mt-5 leading-8 text-[#666]"
              style={{ fontFamily: "Archivo" }}
            >
              Whether enjoyed in a cone, a cup or alongside your favourite
              dessert, this ice cream delivers rich flavour and a silky texture
              that everyone loves.
            </p>
          </div>
        )}

        {activeTab === "information" && (
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span>Weight</span>
              <span>350g</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Flavour</span>
              <span>Vanilla</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Storage</span>
              <span>Keep Frozen</span>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#FFF7FB] p-6">
              <h4 className="font-semibold">Sophia</h4>

              <p className="mt-2 text-[#666]">
                Absolutely delicious! Creamy texture and the vanilla flavour is
                amazing.
              </p>
            </div>

            <div className="rounded-xl bg-[#FFF7FB] p-6">
              <h4 className="font-semibold">James</h4>

              <p className="mt-2 text-[#666]">
                One of the best vanilla ice creams I've ever tasted.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;