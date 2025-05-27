import { useState, useEffect } from "react";
import { IoSettings, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../../data/navlinks";
import "./sidebar.css";

const Sidebar = ({ collapsed, onToggleCollapse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    setInternalCollapsed(collapsed);
  }, [collapsed]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleToggleCollapse = () => {
    if (!isMobile) {
      const newCollapsedState = !internalCollapsed;
      setInternalCollapsed(newCollapsedState);
      if (onToggleCollapse) {
        onToggleCollapse(newCollapsedState);
      }
    }
  };

  return (
    <>
      <button
        className="sidebar__toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {isMobile && (
        <div
          className={`sidebar-overlay ${
            isOpen ? "sidebar-overlay--visible" : ""
          }`}
          onClick={closeSidebar}
        />
      )}

      <div
        className={`sidebar ${isOpen ? "sidebar--open" : ""} ${
          internalCollapsed ? "sidebar--collapsed" : ""
        }`}
      >
        <div className="sidebar__top">
          <div className="sidebar__logo" onClick={handleToggleCollapse}>
            <h2>
              <span>Health</span>care.
            </h2>
          </div>
          <div className="sidebar__section">
            <p>General</p>
            {navLinks.general.map((link, index) => (
              <a
                className={`sidebar__link ${
                  link.name === "Dashboard" ? "sidebar__link--active" : ""
                }`}
                href={link.path}
                key={`general-${index}`}
                onClick={closeSidebar}
              >
                <span className="sidebar__icon">{link.icon}</span>
                <span className="sidebar__text">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="sidebar__section">
            <p>Tools</p>
            {navLinks.tools.map((link, index) => (
              <a
                className="sidebar__link"
                href={link.path}
                key={`tools-${index}`}
                onClick={closeSidebar}
              >
                <span className="sidebar__icon">{link.icon}</span>
                <span className="sidebar__text">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="sidebar__bottom">
          <a className="sidebar__link" href="#settings" onClick={closeSidebar}>
            <span className="sidebar__icon">
              <IoSettings />
            </span>
            <span className="sidebar__text">Settings</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
