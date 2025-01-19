import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import TopRecipes from "./TopRecipes";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TopRecipes />
      <Search />
      <Footer />
    </div>
  );
};

export default HomePage;
