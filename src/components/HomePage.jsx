import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import TopRecipes from "./TopRecipes";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <TopRecipes />
      <Search />
    </div>
  );
};

export default HomePage;
