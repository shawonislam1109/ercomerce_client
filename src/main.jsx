import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import Loading from "./maintenance/Loading.jsx";
import { CssBaseline } from "@mui/material";
import store from "./store/index.js";
import { AuthProvider } from "./hooks/useContext.jsx";
import { Toaster } from "react-hot-toast";

// import ThemeCustomization from "./themes/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeCustomization> */}
    <Suspense fallback={<Loading />}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <CssBaseline />
          <App />
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </ReduxProvider>
      {/* </ThemeCustomization> */}
    </Suspense>
  </React.StrictMode>
);
