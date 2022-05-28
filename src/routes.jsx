/* eslint-disable react/prop-types */
import Icon from "@mui/material/Icon";
import SignIn from "pages/LandingPages/SignIn";
import SignUp from "pages/LandingPages/SignUp";
import Contact from "pages/LandingPages/ContactUs";
import Menu from "pages/LandingPages/Menu";
import Admin from "pages/LandingPages/Admin";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "pages/LandingPages/Main";

const routes = [
  {
    name: "메뉴",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "로그인",
        description: "계정 로그인 & 가입",
        dropdown: true,
        collapse: [
          {
            name: "Sign in",
            route: "/login",
            component: <SignIn />,
          },
          {
            name: "Sign up",
            route: "/register",
            component: <SignUp />,
          },
        ],
      },
      {
        name: "Contact us",
        description: "문의 & 연락처",
        dropdown: false,
        route: "/contact",
        component: <Contact />,
      },
      {
        name: "Menu",
        description: "향원에서 제공하는 다양한 메뉴",
        dropdown: false,
        route: "/menu",
        component: <Menu />,
      },
    ],
  },
  {
    name: "admin",
    icon: <Icon>login</Icon>,
    route: "/admin",
    component: <Admin />,
  },
];

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });

export function AppRouter({ isLoggedIn, userObj }) {
  return (
    <Routes>
      {isLoggedIn ? "" : ""}
      {getRoutes(routes)}
      <Route path="/main" element={<Main userObj={userObj} />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default routes;
