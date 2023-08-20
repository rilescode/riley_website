import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

interface MenuBarProps {
  isAdmin?: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ isAdmin }) => {
  return (
    <nav>
      <ul>
        <div className="button">
          <Link to="/homepage" className="link-button">
            <div className="link-content">Home</div>
          </Link>
        </div>
        <div className="button">
          <Link to="/about" className="link-button">
            <div className="link-content">About</div>
          </Link>
        </div>
        {isAdmin && (
          <div className="button">
            <Link to="/admin" className="link-button">
              <div className="link-content">Admin</div>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default MenuBar;
