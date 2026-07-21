import { useState } from "react";

const testimonials = [
  {
    name: "Kevin Andrew",
    role: "Happy Customer",
    text: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as aspernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do eiusmod tempor incididunt.",
    rating: "★★★★★",
  },
  {
    name: "Sophia Williams",
    role: "Ice Cream Lover",
    text: "The flavors are rich, creamy, and always fresh. Every visit feels special, and the service is consistently warm and welcoming.",
    rating: "★★★★★",
  },
  {
    name: "Daniel Brooks",
    role: "Regular Customer",
    text: "I love the variety of flavors and the beautiful presentation. Their sundaes are always delicious and perfect for every occasion.",
    rating: "★★★★★",
  },
];

const customerImages = [
  "/Images/customer-1.png",
  "/Images/customer-2.png",
  "/Images/customer-3.png",
  "/Images/customer-4.png",
  "/Images/customer-5.png",
  "/Images/customer-6.png",
  "/Images/customer-7.png",
  "/Images/customer-8.png",
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonial = testimonials[activeSlide];

  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(301.26deg, #F7EAF7 8%, #F8F9FC 43%, #FFF4EA 64%, #ECF9FA 87%)",
      }}
    >
      <div className="relative max-w-300 mx-auto px-6 min-h-125">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-[42px] leading-11 text-[#0F0200]"
            style={{ fontFamily: "Berkshire Swash" }}
          >
            Hear from Our <span className="text-[#F83D8E]">Happy</span>
            <br />
            <span className="text-[#F83D8E]">Ice Cream</span> Lovers
          </h2>
        </div>

        {/* Floating Customer Images */}
        <img
            src={customerImages[0]}
            alt=""
            className="hidden lg:block absolute left-24 top-38 w-14 h-14 rounded-full object-cover"
        />
       {/* Left Middle */}
       <img
         src={customerImages[1]}
         alt=""
         className="hidden lg:block absolute left-44 top-60 w-12 h-12 rounded-full object-cover"
        />

        {/* Left Bottom */}
        <img
          src={customerImages[2]}
          alt=""
          className="hidden lg:block absolute left-16 bottom-34 w-13 h-13 rounded-full object-cover"
        />

        {/* Left Lower */}
        <img
          src={customerImages[3]}
          alt=""
          className="hidden lg:block absolute left-46 bottom-20 w-14 h-14 rounded-full object-cover"
        />

        {/* Right Top */}
        <img
          src={customerImages[4]}
          alt=""
          className="hidden lg:block absolute right-46 top-34 w-14 h-14 rounded-full object-cover"
        />

        {/* Right Middle */}
        <img
          src={customerImages[5]}
          alt=""
          className="hidden lg:block absolute right-18 top-50 w-14 h-14 rounded-full object-cover"
        />

        {/* Right Inner */}
        <img
          src={customerImages[6]}
          alt=""
          className="hidden lg:block absolute right-44 top-64 w-12 h-12 rounded-full object-cover"
        />

       {/* Right Bottom */}
       <img
         src={customerImages[7]}
         alt=""
         className="hidden lg:block absolute right-50 bottom-18 w-14 h-14 rounded-full object-cover"
        />
        {/* Testimonial Content */}
        <div className="max-w-150 mx-auto mt-20 text-center">
          <p
            className="text-[14px] leading-6 text-[#0F0200]"
            style={{ fontFamily: "Archivo" }}
          >
            {testimonial.text}
          </p>

          <div className="mt-10">
            <h3
              className="text-[14px] font-semibold text-[#F83D8E]"
              style={{ fontFamily: "Archivo" }}
            >
              {testimonial.name}
            </h3>

            <p
              className="mt-1 text-[10px] text-[#777]"
              style={{ fontFamily: "Archivo" }}
            >
              {testimonial.role}
            </p>

            <p className="mt-2 text-[12px] text-[#F4A100]">
              {testimonial.rating}
            </p>
          </div>

          {/* Scroll Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`rounded-full transition-all ${
                  activeSlide === index
                    ? "w-3 h-3 bg-[#F83D8E]"
                    : "w-2.5 h-2.5 bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;