import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
// import FeatureData from "../Components/Feature/FeatureData";
import FeatureSection from "../Components/Feature/FeatureSection";
import Hero from "../Components/Hero/Hero";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Hero/>
            <FeatureSection/>
          
        </div>
    );
};

export default Home;