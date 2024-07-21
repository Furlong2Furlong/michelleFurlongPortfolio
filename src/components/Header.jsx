import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(null);

  const handleCLick = (id) => {
    setIsProjectsOpen((prevId) => (prevId === id ? null : id));
  };

  const handleClickOutsideClick = (e) => {
    if (!e.target.closest(".dice-item")) {
      setIsProjectsOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideClick);
    return () => {
      document.removeEventListener("click", handleClickOutsideClick);
    };
  }, []);

  const pages = [
    // { id: 1, name: "Home", color: "red", path: "/" },
    {
      id: 2,
      name: "Projects",
      color: "pink",
      submenu: [
        { id: 1, name: "Playing-Body", path: "/PlayingBody" },
        {
          id: 2,
          name: "There A Lot You Can Do With A Hammer",
          path: "/hammer",
        },
        { id: 3, name: "Inter-Play", path: "inter-play" },
        { id: 4, name: "Sky Blue Pink Grey", path: "/sky-blue-pink-grey" },
        { id: 5, name: "Divining Inflexions", path: "/divining-inflexions" },
      ],
    },
    { id: 3, name: "CV", color: "green", path: "/Cv" },
    { id: 4, name: "Press", color: "yellow", path: "/Press" },
    { id: 5, name: "About", color: "blue", path: "/About" },
    { id: 6, name: "Contact", color: "purple", path: "/contact" },
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="header">
      <motion.div
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <NavLink to="/" className={"logo-link"}>
          <h1>MICHELLE FURLONG</h1>
        </NavLink>
      </motion.div>
      <div className="navigation">
        <motion.ul
          className="dice-list"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {pages.map(({ id, name, color, submenu, path }) => (
            <motion.li
              className={`dice-item ${submenu ? "has-submenu" : ""}`}
              variants={item}
              key={id}
              onClick={submenu ? () => handleCLick(id) : undefined}
              // style={{ backgroundColor: color }}
            >
              {path ? (
                <NavLink
                  className={({ isActive }) =>
                    `nav-links ${isActive ? "active-link" : ""} `
                  }
                  to={path}
                  onClick={() => {
                    setIsProjectsOpen(null);
                  }}
                >
                  {name}
                </NavLink>
              ) : (
                name
              )}
              {submenu && isProjectsOpen && (
                <ul className="submenu">
                  {submenu.map(({ id, name, path }) => (
                    <li className="submenu-item" key={id}>
                      <NavLink
                        className={({ isActive }) =>
                          `nav-links ${isActive ? "active-link" : ""} `
                        }
                        to={path}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>CV</li>
          <li>Press</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </div>
  );
}
