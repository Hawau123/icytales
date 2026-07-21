import Navbar from "../components/layout/Navbar";
import AboutHero from "../components/About/AboutHero";
import Journey from "../components/About/Journey";
import Mission from "../components/About/Mission";
import Statistics from "../components/About/Statistics";
import TeamMembers from "../components/About/TeamMembers";
import AboutNewsletter from "../components/About/AboutNewsletter";
import Footer from "../components/layout/Footer";


const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
        <Journey />
        <Mission />
        <Statistics />
        <TeamMembers />
        <AboutNewsletter />
      <Footer />
    </>
  );
};

export default About;