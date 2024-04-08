import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
// import Catalog from "../Components/Catalog/Catalog";
import FeatureData from "../Components/Feature/FeatureData";
import FeatureSection from "../Components/Feature/FeatureSection";
import Hero from "../Components/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            {/* <Catalog/> */}
            <Hero/>
            <FeatureSection/>
          
        </div>
    );
};

export default Home;