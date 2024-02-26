import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Menu.css";

const Menu = () => {
    return (
        <div className="navbar">
            <div className="menu-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className="nav-link">
                            Hem
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cv" className="nav-link">
                            Cv
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Projects" className="nav-link">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className="nav-link">
                            Om mig
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className="nav-link">
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
