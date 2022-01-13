import { useState } from "react";
import { ListItem, ListItemText } from "@mui/material";
import { StyledMenu, StyledDrawer, StyledList } from "./styled";
import { Link } from "@mui/material";

export const DrawerMenu = ({ children, className }: any) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (event: any) => {
    event.target.id == "menu" ? setOpen(true) : setOpen(false);
  };

  const handleDrawerClosed = () => {
    setOpen(false);
  };

  return (
    <StyledMenu
      type="button"
      id="menu"
      onClick={handleDrawerOpen}
      className={className}
    >
      {children}
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerClosed}
      >
        <StyledList>
          {[
            "Existing Inventory",
            "Used Inventory",
            "Trade-In",
            "Test Drive",
            "Charging",
            "Utilities",
            "Find Us",
            "Support",
            "Investor Relations",
          ].map((text) => (
            <ListItem key={text}>
              <Link underline="none" href="/under-construction">
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </StyledList>
      </StyledDrawer>
    </StyledMenu>
  );
};
