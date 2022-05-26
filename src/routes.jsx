import Icon from "@mui/material/Icon";
import SignIn from "pages/LandingPages/SignIn";
import SignUp from "pages/LandingPages/SignUp";
import Contact from "pages/LandingPages/ContactUs";
import Menu from "pages/LandingPages/Menu";
import Admin from "pages/LandingPages/Admin";

const routes = [
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all sections",
        dropdown: true,
        /*
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
        */
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
        /*
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
        */
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        /*
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
        */
      },
      {
        name: "attention catchers",
        description: "See all components",
        dropdown: true,
        /*
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
        */
      },
      {
        name: "elements",
        description: "See all 32 components",
        dropdown: true,
        /*
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
        */
      },
    ],
  },
  {
    name: "Login",
    icon: <Icon>login</Icon>,
    route: "/login",
    component: <SignIn />,
  },
  {
    name: "Sign up",
    icon: <Icon>login</Icon>,
    route: "/register",
    component: <SignUp />,
  },
  {
    name: "Contact us",
    icon: <Icon>login</Icon>,
    route: "/contact",
    component: <Contact />,
  },
  {
    name: "menu",
    icon: <Icon>login</Icon>,
    route: "/menu",
    component: <Menu />,
  },
  {
    name: "admin",
    icon: <Icon>login</Icon>,
    route: "/admin",
    component: <Admin />,
  },
];

export default routes;
