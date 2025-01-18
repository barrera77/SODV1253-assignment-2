import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  barilla,
  buzzfeed,
  food52,
  foodAndWine,
  foodNetwork,
  homeCooks,
  tasteOfHome,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "topTen",
    title: "Top 10 Recipes",
  },
  {
    id: "search",
    title: "Search",
  },
];

const foodCategories = [
  {
    id: "ovo-vegetarian",
    title: "Non-Dairy",
  },
  {
    id: "glutten free",
    title: "Glutten Free",
  },
  {
    id: "peanut",
    title: "Peanut-Free",
  },
  {
    id: "ketogenic",
    title: "Keto",
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
  },
  {
    id: "lacto-vegetarian",
    title: "Egg-Free",
  },
  {
    id: "vegan",
    title: "Vegan",
  },
];

const socialMediaStats = [
  {
    id: "instagram",
    icon: FaInstagram,
    amount: "420K",
    description: "Followers",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    amount: "800K",
    description: "Followers",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    amount: "530K",
    description: "Followers",
  },

  {
    id: "youtube",
    icon: FaYoutube,
    amount: "630K",
    description: "Subscribers",
  },
  {
    id: "mail",
    icon: FaEnvelope,
    amount: "760K",
    description: "Subscribers",
  },
];

const foodExperts = [
  {
    id: "food52",
    logo: food52,
  },
  {
    id: "homeCooks",
    logo: homeCooks,
  },
  {
    id: "tasteOfHome",
    logo: tasteOfHome,
  },
  {
    id: "buzzfeed",
    logo: buzzfeed,
  },
  {
    id: "foodAndWine",
    logo: foodAndWine,
  },
  {
    id: "foodNetwork",
    logo: foodNetwork,
  },
];

const recommendedBrands = [
  {
    id: "barilla",
    logo: barilla,
  },
  {
    id: "",
    logo:
  },
  {
    id: "",
    logo:
  },
  {
    id: "",
    logo:
  },
  {
    id: "",
    logo:
  },
  {
    id: "",
    logo:
  },

]

export { navLinks, foodCategories, socialMediaStats, foodExperts, recommendedBrands };
