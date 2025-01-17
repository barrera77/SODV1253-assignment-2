import { SectionWrapper } from "../hoc";
import { socialMediaStats } from "../constants";

const About = () => {
  return (
    <div>
      <div>
        <div className="about-header mb-[3rem]">
          <p className="font-semibold xs:text-2xl md:text-3xl">
            We Are{" "}
            <span className="text-indigo-300 font-bold xs:text-3xl md:text-4xl">
              Recipe App
            </span>{" "}
            Your Trusted Recipe Source With
          </p>
          <h3 className="font-bold xs:text-4xl sm:text-5xl text-6xl text-indigo-300 my-[1rem]">
            Every recipe you will ever need! . . .
          </h3>
          <p className="font-semibold text-[20px]">
            Explore a world of flavors with our carefully curated recipes.
            Simple, delicious, and made to inspire your inner chef.
          </p>
        </div>
        <div>
          <div className="mt-[4rem] mb-[4rem]">
            <h3 className="text-3xl font-semibold my-[1rem]">
              Loved by Many . . .
            </h3>
            <p className="font-semibold text-[20px]">
              With thousands of followers, our recipes have inspired countless
              home chefs. Be part of the culinary journey everyone’s talking
              about!
            </p>
          </div>
          <div className="grid-container xs:overflow-y-auto xs:pt-7">
            <div className="grid xs:grid-flow-row xs:gap-10 xs:max-h-[350px] sm:grid-cols-3 sm:gap-4 lg:grid-flow-col lg:gap-2 px-1">
              {socialMediaStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="social-media-stats-card sm:w-[160px] md:w-[200px] lg:w-[170px] xl:w-[210px] sm:mb-8"
                  >
                    <div className="stats-card-content mt-3">
                      <div className="card-icon">
                        <IconComponent className="text-2xl m-auto" />
                      </div>
                      <div className="flex flex-col text-center gap-2">
                        <span className="font-semibold">{stat.amount}</span>
                        <span>{stat.description}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
