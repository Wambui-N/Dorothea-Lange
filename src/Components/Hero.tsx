import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
        <h2 className="font-playfairDisplaySC lg:text-5xl text-3xl uppercase">
          Welcome to the world of Dorothea Lange
        </h2>
        <p className="font-roboto text-lg font-light">
          Explore a curated selection of her powerful images that document the
          struggles and triumphs of the American experience.
        </p>
      </div>
      <Image
        src="/image 2.png"
        alt="Dorothea Lange"
        width={400}
        height={300}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Hero;
