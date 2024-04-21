
import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../../assets/image/Basundhara.jpeg";
import city2 from "../../assets/image/omera.jpeg";
import city3 from "../../assets/image/unigas.jpg";
import planet1 from "../../assets/image/jamuna.jpeg";
import planet2 from "../../assets/image/omera.jpeg";
import AboutHero from "./AboutHero";

const AboutPage = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [city1, city2, city3, planet1, planet2];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
    <div className="flex items-center flex-col justify-center bg-[#1e293b] ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] w-full md:w-3/5 lg:w-1/3 absolute"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
      ))}
      <div className="flex flex-row gap-3 mt-10">
        <button
          className="text-white mt-[800px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white mt-[800px]  bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    <AboutHero/>
    </>
  );
};

export default AboutPage;
