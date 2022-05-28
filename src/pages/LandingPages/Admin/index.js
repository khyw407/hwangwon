/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import Edit from "pages/LandingPages/Admin/sections/Edit";
import List from "pages/LandingPages/Admin/sections/List";
import routes from "routes";
import bgImage from "assets/images/bg-menu.jpeg";

function Admin({ isLoggedIn, userObj }) {
  // admin 권한을 확인해서 admin만 렌더링되게 해야됨
  console.log(isLoggedIn);
  console.log(userObj);

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <List userObj={userObj} />
          <Edit userObj={userObj} />
        </Card>
      </MKBox>
      <MKBox width="100%" position="absolute">
        <SimpleFooter />
      </MKBox>
    </>
  );
}

export default Admin;
