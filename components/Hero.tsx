"use client";

import Image from "next/image";
import { CustomButton } from "../components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Search for, Buy or Lease a Luxury Vehicle today!
        </h1>

        <p className="hero__subtitle">
          Streamline your car acquisition process with our quick and detailed buying process.
        </p>

        <CustomButton
          title="Explore Catalogue"
          containerStyles="bg-primary-red text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
