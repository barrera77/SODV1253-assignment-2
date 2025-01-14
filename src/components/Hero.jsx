const Hero = () => {
  return (
    <div className="hero-wrapper xs:bg-cover sm:bg-med">
      <div className="hero-content xs:w-[100%] xs:top-[20%] md:top-[3%] 2xl:top-[15%] ">
        <div className="ps-[5%] xs:w-[100%] xs:ps-0 w-[90%] sm:p-[4rem] md:w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[60%]">
          <h1 className="mb-[3rem] pb-5 text-6xl font-extrabold tracking-tight text-white md:text-7xl lg:text-10xl dark:text-white xs:text-5xl">
            Cook with Confidence, <br /> Eat with Joy
          </h1>
          <p className="custom-paragraph xs:text-lg md:text-2xl font-bold text-indigo-300">
            Discover simple, step-by-step recipes that make every meal a
            masterpiece. From hearty breakfasts to delicious desserts, we’ve got
            everything you need to satisfy your cravings. Let’s make cooking
            fun, flavorful, and easy!!
          </p>
          <div className="mt-9">
            <a href={`#search`} className="browse-button">
              Find Your Next Meal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
