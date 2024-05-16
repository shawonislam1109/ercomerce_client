// // ThemeCustomization.js
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";

const ThemeCustomization = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    // <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </StyledEngineProvider>
  );
};

ThemeCustomization.propTypes = {
  children: PropTypes.node,
};

export default ThemeCustomization;
