import styled from "@emotion/styled";
import { Drawer, DrawerProps, List, ListProps } from "@mui/material";

export const StyledMenu = styled.a``;

export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  "& .MuiDrawer-paper": {
    overflow: "hidden",
    display: "flex",
    color: "white",
    width: "15%",
    minWidth: 200,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    left: "80%",
    background:
      "linear-gradient(180deg, rgba(24,20,20,0.1) 0%,  rgba(24,20,20,1) 9%, rgba(24,20,20,1) 40%, transparent, transparent)",
  },
}));

export const StyledList = styled(List)<ListProps>(({ theme }) => ({
  "& .MuiListItem-root:first-of-type": {
    marginTop: "30%",
  },
  "& .MuiListItem-root": {
    marginLeft: 10,
  },
  "& .MuiListItem-root:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginLeft: 13,
  },
}));
