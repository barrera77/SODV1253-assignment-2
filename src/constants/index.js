import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
    id: "glutten-free",
    title: "Glutten-Free",
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

export { navLinks, foodCategories, socialMediaStats };
