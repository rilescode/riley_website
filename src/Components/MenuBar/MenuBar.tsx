import * as React from "react";
import Button from "../Button/Button";

interface MenuBarProps {
  isAdmin?: boolean;
  navigation: any;
}

const MenuBar: React.FC<MenuBarProps> = ({ isAdmin, navigation }) => {
  return (
    <div>
      <Button
        title="Home"
        // onPress={() => navigation.navigate("HomePage")}
      ></Button>
      <Button title="About Me"></Button>
      {isAdmin && <Button title="Admin"></Button>}
    </div>
  );
};

export default MenuBar;
