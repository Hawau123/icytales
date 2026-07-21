import Navbar from "../components/layout/Navbar";
import TeamHero from "../components/Team/TeamHero";
import TeamGrid from "../components/Team/TeamGrid";
import Footer from "../components/layout/Footer";

const Team = () => {
  return (
    <>
      <Navbar />
      <TeamHero />
      <TeamGrid />
      <Footer />
    </>
  );
};

export default Team;