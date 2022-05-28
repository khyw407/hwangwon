import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { AppRouter } from "routes";
import { authService } from "./firebase";

export default function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false);
      }
      setInit(true);
    });
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {init && <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />}
    </ThemeProvider>
  );
}
