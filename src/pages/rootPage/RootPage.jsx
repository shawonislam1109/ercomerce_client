import { Grid, Paper } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MenuItem from "./MenuItem/MenuItem";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: "1px solid gray",
  paddingBottom: 10,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
}));

const RootPage = () => {
  return (
    <>
      <Navbar />

      <Grid container spacing={2} mt={2}>
        <Grid item xs={6} md={2} sx={{ borderRadius: 2 }}>
          <DemoPaper>
            <MenuItem />
          </DemoPaper>
        </Grid>
        <Grid item xs={6} md={8}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default RootPage;
