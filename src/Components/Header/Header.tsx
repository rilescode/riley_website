import { useLocation } from "react-router-dom";
import { getPageName } from "../../helpers";
import MenuBar from "../MenuBar/MenuBar";

interface HeaderProps {
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdmin }) => {
  const location = useLocation();
  const pageName = getPageName(location.pathname);
  return (
    <span className="header-container">
      <span className="header">{pageName}</span>
      <div className="spacer"></div>
      <div className="menu-bar-container">
        <MenuBar isAdmin={true}></MenuBar>
      </div>
    </span>
  );
};

export default Header;
