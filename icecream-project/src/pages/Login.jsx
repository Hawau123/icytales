import { useState } from "react";
import Navbar from "../components/layout/Navbar";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successType, setSuccessType] = useState("login");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setSuccessType("login");
    setShowSuccess(true);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setSuccessType("register");
    setShowSuccess(true);
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <Navbar />

      <main
        className="
          relative w-full overflow-hidden
          bg-linear-to-r from-[#FFF6FB] via-[#FFF8F2] to-[#F2FFFD]
          px-5 py-12
          sm:px-8 sm:py-16
          lg:min-h-[calc(100vh-102px)] lg:px-16
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-300
            flex-col items-center justify-center gap-10
            lg:flex-row lg:gap-16
          "
        >
          {/* Login/Register card */}
          <section
            className="
              relative z-10 w-full max-w-120
              rounded-4xl border border-white/70
              bg-white/90 p-5
              shadow-[0_20px_60px_rgba(104,50,146,0.18)]
              backdrop-blur-md
              sm:p-8
            "
          >
            {/* Tabs */}
            <div className="grid grid-cols-2 rounded-full bg-[#F3EEF5] p-1">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`
                  h-12 rounded-full text-[14px] font-semibold transition-all
                  ${
                    activeTab === "login"
                      ? "bg-[#F83D8E] text-white shadow-[0_8px_22px_rgba(248,61,142,0.28)]"
                      : "text-[#683292] hover:text-[#F83D8E]"
                  }
                `}
                style={{ fontFamily: "Archivo" }}
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`
                  h-12 rounded-full text-[14px] font-semibold transition-all
                  ${
                    activeTab === "register"
                      ? "bg-[#F83D8E] text-white shadow-[0_8px_22px_rgba(248,61,142,0.28)]"
                      : "text-[#683292] hover:text-[#F83D8E]"
                  }
                `}
                style={{ fontFamily: "Archivo" }}
              >
                Register
              </button>
            </div>

            {activeTab === "login" ? (
              <div className="mt-9">
                <h1
                  className="text-[30px] font-bold text-[#3A2850] sm:text-[36px]"
                  style={{ fontFamily: "Archivo" }}
                >
                  Welcome back
                </h1>

                <p
                  className="mt-2 text-[13px] leading-5 text-[#777]"
                  style={{ fontFamily: "Archivo" }}
                >
                  Sign in to order your favorite vegan scoops.
                </p>

                <form onSubmit={handleLoginSubmit} className="mt-8">
                  <label
                    htmlFor="login-email"
                    className="block text-[12px] font-semibold text-[#4F3B64]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    Email
                  </label>

                  <input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="
                      mt-2 h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      transition placeholder:text-[#AAA]
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <label
                    htmlFor="login-password"
                    className="mt-6 block text-[12px] font-semibold text-[#4F3B64]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    Password
                  </label>

                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="
                      mt-2 h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      transition placeholder:text-[#AAA]
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <div className="mt-5 text-right">
                    <button
                      type="button"
                      className="text-[12px] text-[#F83D8E] hover:text-[#683292]"
                      style={{ fontFamily: "Archivo" }}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="
                      mt-6 h-13 w-full rounded-full
                      bg-[#F83D8E] text-[14px]
                      font-semibold text-white
                      shadow-[0_10px_28px_rgba(248,61,142,0.3)]
                      transition hover:-translate-y-0.5
                    "
                    style={{ fontFamily: "Archivo" }}
                  >
                    Sign In
                  </button>

                  <p
                    className="mt-6 text-center text-[12px] text-[#999]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    New to IcyTales?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("register")}
                      className="font-semibold text-[#F83D8E]"
                    >
                      Create one
                    </button>
                  </p>
                </form>
              </div>
            ) : (
              <div className="mt-9">
                <h1
                  className="text-[30px] font-bold text-[#3A2850] sm:text-[36px]"
                  style={{ fontFamily: "Archivo" }}
                >
                  Join IcyTales
                </h1>

                <p
                  className="mt-2 text-[13px] leading-5 text-[#777]"
                  style={{ fontFamily: "Archivo" }}
                >
                  Create an account and unlock sweet offers and rewards.
                </p>

                <form
                  onSubmit={handleRegisterSubmit}
                  className="mt-8 flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    className="
                      h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="
                      h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="
                      h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                    className="
                      h-13 w-full rounded-2xl
                      border border-[#DDD3E0] bg-white
                      px-4 text-[14px] outline-none
                      focus:border-[#F83D8E]
                    "
                    style={{ fontFamily: "Archivo" }}
                  />

                  <button
                    type="submit"
                    className="
                      mt-2 h-13 w-full rounded-full
                      bg-[#F83D8E] text-[14px]
                      font-semibold text-white
                      shadow-[0_10px_28px_rgba(248,61,142,0.3)]
                      transition hover:-translate-y-0.5
                    "
                    style={{ fontFamily: "Archivo" }}
                  >
                    Create Account
                  </button>

                  <p
                    className="text-center text-[12px] text-[#999]"
                    style={{ fontFamily: "Archivo" }}
                  >
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="font-semibold text-[#F83D8E]"
                    >
                      Sign in
                    </button>
                  </p>
                </form>
              </div>
            )}
          </section>

          {/* Ice-cream image */}
          <div
            className="
              relative flex w-full max-w-150
              items-center justify-center
              lg:max-w-170
            "
          >
            <div
              className="
                absolute h-72 w-72 rounded-full
                bg-white/60 blur-3xl
                sm:h-100 sm:w-100
              "
            />

            <img
              src="/Images/37.png"
              alt="Chocolate ice cream bowl"
              className="
                relative z-10 w-80 object-contain
                drop-shadow-[0_28px_36px_rgba(70,35,50,0.22)]
                sm:w-110
                lg:w-145
              "
            />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 90"
            className="h-10 w-full sm:h-14"
            preserveAspectRatio="none"
          >
            <path
              d="M0 35C80 55 120 15 210 35C300 55 340 15 430 35C520 55 560 15 650 35C740 55 780 15 870 35C960 55 1000 15 1090 35C1180 55 1220 15 1310 35C1370 48 1410 40 1440 35V90H0V35Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </main>

      {/* Success modal */}
{showSuccess && (
  <div
    className="
      fixed inset-0 z-999
      flex items-center justify-center
      bg-[#2B163F]/55 px-5
      backdrop-blur-sm
    "
    onClick={closeSuccessModal}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      onClick={(event) => event.stopPropagation()}
      className="
        relative w-full max-w-105 overflow-hidden
        rounded-4xl
        border border-white/70
        px-7 py-8
        shadow-[0_30px_90px_rgba(64,28,86,0.35)]
        sm:px-9 sm:py-10
      "
      style={{
        background:
          "linear-gradient(135deg, #FFF6FB 0%, #FFF9F2 48%, #F1FCFC 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#F83D8E]/15 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#683292]/12 blur-2xl" />

      {/* Success icon */}
      <div
        className="
          relative z-10 flex h-16 w-16 items-center justify-center
          rounded-full bg-[#F83D8E]
          shadow-[0_10px_28px_rgba(248,61,142,0.35)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path
            d="M5 12.5L9.2 16.5L19 7"
            stroke="white"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2
        id="success-title"
        className="
          relative z-10 mt-6
          text-[38px] leading-10 text-[#0F0200]
          sm:text-[44px] sm:leading-11
        "
        style={{ fontFamily: "Berkshire Swash" }}
      >
        {successType === "login"
          ? "Welcome Back!"
          : "Sweet Success!"}
      </h2>

      <p
        className="
          relative z-10 mt-4
          text-[14px] leading-6 text-[#666]
          sm:text-[15px]
        "
        style={{ fontFamily: "Archivo" }}
      >
        {successType === "login"
          ? "You have successfully signed in to your IcyTales account. Your favorite scoops and exclusive offers are waiting for you."
          : "Your IcyTales account has been created successfully. You can now enjoy sweet rewards, special deals, and your favorite flavors."}
      </p>

      <button
        type="button"
        onClick={closeSuccessModal}
        className="
          relative z-10 mt-8 flex h-13 w-full
          items-center justify-center rounded-full
          bg-[#683292]
          text-[13px] font-semibold text-white
          shadow-[0_10px_28px_rgba(104,50,146,0.28)]
          transition
          hover:-translate-y-0.5 hover:bg-[#F83D8E]
        "
        style={{ fontFamily: "Archivo" }}
      >
        {successType === "login"
          ? "Continue to IcyTales →"
          : "Start Exploring →"}
      </button>
    </div>
  </div>

      )}
    </>
  );
};

export default Login;