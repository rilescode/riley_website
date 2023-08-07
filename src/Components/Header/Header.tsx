import MenuBar from "../MenuBar/MenuBar";

interface HeaderProps {
  pageName: string;
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ pageName, isAdmin }) => {
  return (
    <span className="header-container">
      <span className="header">{pageName}</span>
      <div className="spacer"></div>
      <div className="menu-bar-container">
        <MenuBar navigation={() => {}} isAdmin={isAdmin}></MenuBar>
      </div>
    </span>
  );
};

export default Header;
