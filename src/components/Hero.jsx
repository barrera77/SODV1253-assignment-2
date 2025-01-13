import React from "react";

const Hero = () => {
  return (
    <div className="hero-wrapper xs:bg-clip-content xs:bg-no-repeat xs:bg-[url(./assets/food-background-mobile.jpg)]">
      <div className="hero-content xs:w-[100%] top-[20%]">
        <div className="ps-[5%] xs:w-[100%] xs:ps-0 w-[90%] ">
          <h1 className="mb-[3rem] pb-5 text-6xl font-extrabold tracking-tight text-white md:text-8xl lg:text-10xl dark:text-white xs:text-5xl">
            Cook with Confidence, <br /> Eat with Joy
          </h1>
          <p className="xs:text-xl text-3xl font-bold text-indigo-300">
            Discover simple, step-by-step recipes that make every meal a
            masterpiece. From hearty breakfasts to delicious desserts, we’ve got
            everything you need to satisfy your cravings. Let’s make cooking
            fun, flavorful, and easy!!
          </p>
          <div>
            <button className="browse-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
