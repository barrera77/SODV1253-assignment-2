import { useEffect, useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar-wrapper absolute xs:top-0 sm:top-auto sm:bottom-0 ">
      <div className="navbar-mobile">
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
            } dropdown-menu p-6 fixed top-10 right-0 my-2 min-w-[140px] w-full z-10 shadow-lg secondary-primary-gradient transition-transform duration-700 ease-in-out`}
          >
            <ul className="list-none flex flex-col justify-center text-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-inactive"
                  } dropdown-menu-link text-[16px] cursor-pointer font-bold`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-md-view xs:hidden sm:block">
        <ul className="nav-links xs:w-[80%]">
          {navLinks.map((link) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-inactive"
              } nav-link`}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
