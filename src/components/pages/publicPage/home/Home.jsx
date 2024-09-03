import HeroAbout from "./HeroAbout/HeroAbout";
import HeroContact from "./HeroContact/HeroContact";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroContact />

      <HeroAbout />
    </div>
  );
};

export default Home;
