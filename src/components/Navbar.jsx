import { useEffect, useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar-wrapper xs:top-0 ">
      <div className="navbar-mobile">
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[22px] h-[22px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "translate-x-0" : "translate-x-full"
            } p-6 fixed top-20 right-0 my-2 min-w-[140px] w-full z-10 rounded-xl shadow-lg secondary-primary-gradient transition-transform duration-700 ease-in-out`}
          >
            <ul className="list-none flex flex-col justify-center text-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-inactive"
                  } text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <hr />

              <li
                className={`${
                  active === "resume" ? "text-white" : "text-inactive"
                } hover:text-white hover:font-bold text-[18px] cursor-pointer font-medium`}
                onClick={() => {
                  setActive("resume");
                }}
              >
                My Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-md-view xs:hidden">
        <ul className="nav-links">
          <li className="nav-link">
            <a>Home</a>
          </li>
          <li className="nav-link">
            <a>About</a>
          </li>
          <li className="nav-link">
            <a>Latest Recipes</a>
          </li>
          <li className="nav-link">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
