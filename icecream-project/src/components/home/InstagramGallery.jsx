const instagramImages = [
  "/Images/instagram-1.png",
  "/Images/instagram-2.png",
  "/Images/instagram-3.png",
  "/Images/instagram-4.png",
  "/Images/instagram-5.png",
];

const InstagramGallery = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(301.26deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)",
      }}
    >
      <div className="relative mx-auto max-w-250 px-6">
        {/* Heading */}
        <div className="relative z-20 text-center">
          <h2
            className="text-[36px] leading-9 text-[#0F0200] sm:text-[40px] sm:leading-10"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Follow Us on{" "}
            <span className="text-[#F83D8E]">Instagram</span>
          </h2>

          <p
            className="mt-3 text-[12px] text-[#666]"
            style={{ fontFamily: "Archivo" }}
          >
            Join our Instagram community for updates, special deals, and more!
          </p>
        </div>

        {/* Gallery wrapper */}
        <div className="relative isolate mt-10">
          {/* Pink circle behind first image */}
          <img
            src="/Images/pink-circle.png"
            alt=""
            className="
              pointer-events-none absolute z-0 select-none
              -left-4 -top-5 h-24 w-24
              sm:-left-5 sm:-top-6 sm:h-28 sm:w-28
              lg:-left-7 lg:-top-6 lg:h-32 lg:w-32
            "
          />

          {/* Purple circle behind last image */}
          <img
            src="/Images/purple-circle.png"
            alt=""
            className="
              pointer-events-none absolute z-0 select-none
              -bottom-5 -right-4 h-24 w-24
              sm:-bottom-6 sm:-right-5 sm:h-28 sm:w-28
              lg:-bottom-6 lg:-right-7 lg:h-32 lg:w-32
            "
          />

          {/* Gallery */}
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {instagramImages.map((image, index) => (
              <a
                key={image}
                href="#"
                aria-label={`View Instagram post ${index + 1}`}
                className="group block overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="
                    h-72 w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                    sm:h-64
                    lg:h-52
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;