import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { AppRouter } from "routes";
import { authService, dbService } from "./firebase";

export default function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    authService.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid } = user;
        dbService.collection("admin").onSnapshot((snapshot) => {
          const result = snapshot.docs.find((el) => {
            const { id } = el.data();
            return id === uid;
          });

          if (result) {
            setIsAdmin(true);
          }

          setUserObj({
            uid: user.uid,
            displayName: user.displayName,
            updateProfile: (args) => user.updateProfile(args),
          });
          setInit(true);
        });
      } else {
        setUserObj(false);
        setInit(true);
      }
    });
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {init && <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} isAdmin={isAdmin} />}
    </ThemeProvider>
  );
}
