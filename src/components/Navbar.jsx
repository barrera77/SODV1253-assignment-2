import { useEffect, useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { debounce } from "lodash";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-wrapper");

    const handleIntersection = debounce(([entry]) => {
      setisSticky(!entry.isIntersecting);
    }, 50);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.07,
    });

    if (hero) {
      observer.observe(hero);
    }

    return () => {
      if (hero) {
        observer.unobserve(hero);
      }
    };
  }, []);

  return (
    <div
      className={`navbar-wrapper ${
        isSticky ? "sticky top-0 z-20" : "absolute bottom-0 z-10"
      } transition-all`}
    >
      <nav className="">
        <div className="navbar-mobile ">
          <div className="sm:hidden flex flex-1 justify-end items-center py-3">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <FaWindowClose className="text-2xl text-white" />
              ) : (
                <FaBars className="text-2xl text-white" />
              )}
            </button>

            {/* <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[22px] h-[22px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            /> */}
            <div
              className={`${
                toggle ? "translate-x-0" : "translate-x-full"
              } dropdown-menu p-6 absolute top-10 right-0 my-2 min-w-[140px] w-[100%] z-10 transition-transform duration-700 ease-in-out`}
            >
              <ul className="list-none flex flex-col justify-center text-center gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-black"
                    } text-[16px] cursor-pointer font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`} className="">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Desktop View */}
        <div className="navbar-md-view xs:hidden sm:block">
          <ul className="nav-links xs:w-[80%]">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  activeLink === link.title ? "text-indigo-700" : "text-white"
                } nav-link`}
                onClick={() => {
                  setActiveLink(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
