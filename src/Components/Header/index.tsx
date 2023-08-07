import { Menu, MenuLink, PrimaryNav } from "./NavElements";

const NavBar = () => {
  return (
    <>
      <PrimaryNav>
        <Menu>
          <MenuLink to="/home">Home</MenuLink>
          <MenuLink to="/about">About Me</MenuLink>
          <MenuLink to="/projects">Projects</MenuLink>
          {/* <MenuLink to="/contact">Contact</MenuLink> */}
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default NavBar;
