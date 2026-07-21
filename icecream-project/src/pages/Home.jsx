import Navbar from  "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Favorites from "../components/home/Favorites";
import Categories from "../components/home/Categories";
import SummerSpecial from "../components/home/SummerSpecial";
import BestSellers from "../components/home/BestSellers";
import Testimonials from "../components/home/Testimonials";
import NewsLetter from "../components/home/NewsLetter";
import InstagramGallery from "../components/home/InstagramGallery";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutPreview/>
      <Favorites/>
      <Categories/>
      <SummerSpecial/>
      <BestSellers/>
      <Testimonials/>
      <NewsLetter/>
      <InstagramGallery/>
      <Footer/>
    </>
  );
}

export default Home;