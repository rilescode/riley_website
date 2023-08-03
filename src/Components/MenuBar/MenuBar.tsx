import Button from "../Button/Button";

interface MenuBarProps {
  isAdmin?: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ isAdmin }) => {
  return (
    <div>
      <Button title="Home"></Button>
      <Button title="About Me"></Button>
      {isAdmin && <Button title="Admin"></Button>}
    </div>
  );
};

export default MenuBar;
