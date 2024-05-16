import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "../../component/ToggleColorMode";
import { Link } from "react-router-dom";
import NavbarDaw from "../rootPage/Dawer";
import { Grid, IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ProfileMenu from "./ProfileMenu";
import useAuth from "../../hooks/useAuth";
import { useGetBranchQuery } from "../../api/service/branch.service";

const menuItem = [
  {
    id: 1,
    name: "features",
  },
  {
    id: 2,
    name: "testimonials",
  },
  {
    id: 3,
    name: "highlights",
  },
  {
    id: 4,
    name: "pricing",
  },
  {
    id: 5,
    name: "faq",
  },
];

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function Navbar({ mode, toggleColorMode }) {
  // get user auth
  const { user, isLoggedIn } = useAuth();

  console.log(user);

  // RTK QUERY MUTATION
  const { data: branches } = useGetBranchQuery(user?.merchant, {
    skip: !user,
  });

  console.log(branches);

  const [open, setOpen] = React.useState(false);
  const [leftSideMenu, setLeftSideMenu] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // leftSideMenuHandler
  const LeftSideMenuHandler = (Data) => {
    setLeftSideMenu(Data);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <Grid item spacing={3}>
      <NavbarDaw
        LeftSideMenuHandler={LeftSideMenuHandler}
        leftSideMenu={leftSideMenu}
      />
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            {/* left side navbar */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <IconButton
                onClick={() => LeftSideMenuHandler(true)}
                aria-label="delete"
                size="small"
              >
                <MenuOutlinedIcon />
              </IconButton>
              <img
                src={
                  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {menuItem.map((item) => {
                  return (
                    <MenuItem
                      key={item.key}
                      onClick={() => scrollToSection(item.name)}
                      sx={{ py: "6px", px: "12px" }}
                    >
                      <Typography variant="body2" color="text.primary">
                        {item.name}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Box>
            </Box>

            {/* toggle button */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

              {!isLoggedIn && !user && (
                <MenuItem>
                  <Button
                    color="primary"
                    variant="outlined"
                    component={Link}
                    sx={{ width: "100%" }}
                    to={"auth/login"}
                  >
                    Sign in
                  </Button>
                </MenuItem>
              )}
              {isLoggedIn && user && <ProfileMenu />}
            </Box>

            {/* Drawer  right side*/}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  {menuItem.map((item) => {
                    return (
                      <MenuItem
                        key={item.id}
                        onClick={() => scrollToSection("features")}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      sx={{ width: "100%" }}
                      to={"auth/signUp"}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component={Link}
                      sx={{ width: "100%" }}
                      to={"auth/login"}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
