import HeroAbout from "./HeroAbout/HeroAbout";
import HeroContact from "./HeroContact/HeroContact";
import HeroContactPage from "./HeroContact/HeroContactPage";
import HeroEvents from "./HeroEvents/HeroEvents";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <HeroContact /> */}
      <HeroAbout />
      <HeroEvents />
      <HeroContactPage />

    </div>
  );
};

export default Home;
