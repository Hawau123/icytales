import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    title: "Our Location",
    lines: [
      "121 King Street Melbourne",
      "Victoria 3000, Australia",
    ],
  },
  {
    icon: FiPhone,
    title: "Phone Number",
    lines: [
      "+123456780123",
      "+012 345 6789",
    ],
  },
  {
    icon: FiMail,
    title: "Email us at",
    lines: [
      "info@icytales.com",
      "support@icytales.com",
    ],
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("Your message has been sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    window.setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="mx-auto w-full max-w-300 px-6 py-20">
      <div className="text-center">
        <h2
          className="text-[38px] leading-10 text-[#0F0200] sm:text-[44px]"
          style={{ fontFamily: "Berkshire Swash" }}
        >
          Get in <span className="text-[#F83D8E]">Touch</span> With Us
        </h2>

        <p
          className="mt-3 text-[12px] text-[#777]"
          style={{ fontFamily: "Archivo" }}
        >
          Reach out and connect with us today for any inquiries or assistance.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Contact information */}
        <div className="space-y-5">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  flex items-start gap-4 rounded-xl bg-white
                  p-5 shadow-[0_8px_24px_rgba(0,0,0,0.07)]
                "
              >
                <div
                  className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-full bg-[#683292] text-white
                  "
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h3
                    className="text-[13px] font-semibold text-[#0F0200]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    {item.title}
                  </h3>

                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 text-[10px] leading-4 text-[#777]"
                      style={{ fontFamily: "Archivo" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div>
            <label
              htmlFor="firstName"
              className="text-[11px] text-[#555]"
              style={{ fontFamily: "Archivo" }}
            >
              First Name
            </label>

            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="
                mt-2 h-12 w-full rounded-[10px]
                border border-[#E7E7E7]
                px-4 text-[12px] outline-none
                focus:border-[#F83D8E]
              "
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="text-[11px] text-[#555]"
              style={{ fontFamily: "Archivo" }}
            >
              Last Name
            </label>

            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="
                mt-2 h-12 w-full rounded-[10px]
                border border-[#E7E7E7]
                px-4 text-[12px] outline-none
                focus:border-[#F83D8E]
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[11px] text-[#555]"
              style={{ fontFamily: "Archivo" }}
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                mt-2 h-12 w-full rounded-[10px]
                border border-[#E7E7E7]
                px-4 text-[12px] outline-none
                focus:border-[#F83D8E]
              "
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-[11px] text-[#555]"
              style={{ fontFamily: "Archivo" }}
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="
                mt-2 h-12 w-full rounded-[10px]
                border border-[#E7E7E7]
                px-4 text-[12px] outline-none
                focus:border-[#F83D8E]
              "
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-[11px] text-[#555]"
              style={{ fontFamily: "Archivo" }}
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="
                mt-2 w-full resize-none rounded-[10px]
                border border-[#E7E7E7]
                p-4 text-[12px] outline-none
                focus:border-[#F83D8E]
              "
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="
                rounded-full bg-[#F83D8E]
                px-8 py-3 text-[12px] text-white
                shadow-[0_8px_22px_rgba(248,61,142,0.25)]
                transition hover:bg-[#683292]
              "
              style={{ fontFamily: "Archivo" }}
            >
              Submit Now →
            </button>

            {message && (
              <p
                className="mt-4 text-[12px] text-[#F83D8E]"
                style={{ fontFamily: "Archivo" }}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;