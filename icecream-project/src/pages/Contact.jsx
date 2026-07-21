import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactSection from "../components/Contact/ContactSection";
import ContactMap from "../components/Contact/ContactMap";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <Footer />
    </>
  );
};

export default Contact;