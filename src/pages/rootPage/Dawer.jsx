import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom/dist";
import PropTypes from "prop-types";
import { IconButton, MenuItem, Stack } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function NavbarDaw({ leftSideMenu, LeftSideMenuHandler }) {
  return (
    <div>
      <Drawer anchor="left" open={leftSideMenu}>
        <Stack direction="row" justifyContent="end">
          <IconButton sx={{ mr: 2 }} onClick={() => LeftSideMenuHandler(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Stack>

        <Box
          sx={{
            minWidth: "20dvw",
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
            {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
          </Box>

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
    </div>
  );
}

NavbarDaw.propTypes = {
  leftSideMenu: PropTypes.bool,
  LeftSideMenuHandler: PropTypes.func,
};
