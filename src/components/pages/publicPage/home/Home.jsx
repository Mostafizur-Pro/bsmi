import HeroAbout from "./HeroAbout/HeroAbout";
import HeroContactPage from "./HeroContact/HeroContactPage";
import HeroEvents from "./HeroEvents/HeroEvents";
import HeroGallery from "./HeroGallery/HeroGallery";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <HeroContact /> */}
      <HeroAbout />
      <HeroEvents />
      <HeroGallery />
      <HeroContactPage />

    </div>
  );
};

export default Home;
