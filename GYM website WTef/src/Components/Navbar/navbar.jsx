import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const Change_bg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", Change_bg);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <NavLink to="/" className="navbar-brand">
        <img src="./images/logo.png" alt='logo'/>
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              FITNESS
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                NUTERATION
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                GYM
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              BECOME WTF PARTNER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              LOG IN
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
