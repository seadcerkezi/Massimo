import React from "react";
import { menu } from "../../data";
import "./menu.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((menus) => (
        <div
          style={{
            backgroundImage: `url("${menus.img}")`,
            color: menus.color,
          }}
          className="menu-links"
        >
          <div>
            <h4>{menus.title}</h4>
            <p>{menus.desc}</p>
            <button
              style={{
                backgroundColor: menus.id === 2 ? "black" : "white",
              }}
            >
              <NavLink
                style={{
                  color: menus.id === 2 ? "white" : "#cd2f2f",
                  textDecoration: "none",
                }}
                to={`/${menus.slug}`}
              >
                Explore
              </NavLink>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
