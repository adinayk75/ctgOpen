import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link } from "react-router-dom";
import tennisball from "../assets/tennisball.png";
// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Leagues",
    to: "/leagues",
  },
  {
    text: "Gallery",
    to: "/photogallery",
  },
  {
    text: "Classifieds",
    to: "/classifieds",
  },
  // {
  //   text: "About",
  //   to: "/about",
  // },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "JoinCTG",
    to: "/joinctg",
  },
  {
    text: "Login",
    to: "/login",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#3498db",
      }}
      elevation={0}
    >
      <StyledToolbar style={{ height: "124px" }}>
        <Typography variant="h3" component="h3">
          <div style={{ color: "#dfff4f", fontWeight: "900" }}>CTG Open</div>
        </Typography>
        <Box>
          <div>
            <img
              src={tennisball}
              alt=""
              style={{
                width: "70px",
                backgroundColor: "transparent",
              }}
            ></img>
          </div>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
