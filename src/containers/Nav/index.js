import React from "react";
import { Link } from "react-router-dom";

export default ({ links }) => {
  return (
    <nav>
      <ul className="nav border m-4">
        {links.map((link) => {
          return (
            <li key={link.id} className="nav-item">
              <Link className="nav-link" to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
