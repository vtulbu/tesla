import { StyledNavBar } from "./styled";
import { DrawerMenu } from "./MenuDrawer";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <a className="linkHover" href="/under-construction">
        Shop
      </a>
      <a className="linkHover" href="/under-construction">
        Account
      </a>
      <DrawerMenu className="linkHover">Menu</DrawerMenu>
    </StyledNavBar>
  );
};
