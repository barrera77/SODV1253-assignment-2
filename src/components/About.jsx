import { SectionWrapper } from "../hoc";
import { socialMediaStats } from "../constants";

const About = () => {
  return (
    <div>
      <div>
        <div className="about-header mb-[3rem]">
          <p className="font-semibold text-3xl">
            Welcome to our Recipe App where we have
          </p>
          <h3 className="font-bold text-6xl text-indigo-300 my-[1rem]">
            Every recipe you will ever need! . . .
          </h3>
          <p className="font-semibold text-[20px]">
            Explore a world of flavors with our carefully curated recipes.
            Simple, delicious, and made to inspire your inner chef.
          </p>
        </div>
        <div>
          <div className="grid-container">
            <div className="grid xs:grid-flow-col gap-3 xs:max-h-[350px]">
              {socialMediaStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.id} className="social-media-stats-card">
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
