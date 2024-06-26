import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";

import Catalog from "../Components/Catalog/Catalog";
// import Catalog from "../Components/Catalog/Catalog";
// import FeatureData from "../Components/Feature/FeatureData";
import FeatureSection from "../Components/Feature/FeatureSection";
import Hero from "../Components/Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <AboutPage/> */}
      <Banner/>
      <About/>
      <Hero />
      <Catalog />
      <FeatureSection />
    </div>
  );
};

export default Home;
