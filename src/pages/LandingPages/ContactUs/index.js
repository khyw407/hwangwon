import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultFooter from "components/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-main.jpeg";
import sideImage from "assets/images/bg-contact.jpeg";

function ContactUs() {
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
        <MKBox component="section" py={{ xs: 0, lg: 6 }} sx={{ mt: 3 }}>
          <Container>
            <Grid container item>
              <MKBox
                width="100%"
                bgColor="white"
                borderRadius="xl"
                shadow="xl"
                mb={6}
                py={{ xs: 0, lg: 6 }}
                sx={{ overflow: "hidden" }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    lg={5}
                    position="relative"
                    px={0}
                    sx={{
                      backgroundImage: ({
                        palette: { gradients },
                        functions: { rgba, linearGradient },
                      }) =>
                        `${linearGradient(
                          rgba(gradients.dark.main, 0.8),
                          rgba(gradients.dark.state, 0.8)
                        )}, url(${sideImage})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <MKBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      height="100%"
                    >
                      <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                        <MKTypography variant="h3" color="white" mb={1}>
                          Contact Information
                        </MKTypography>
                        <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                          ????????? ????????? ??????????????? ????????? ???????????? ????????? ??????????????????.
                        </MKTypography>
                        <MKBox display="flex" p={1}>
                          <MKTypography variant="button" color="white">
                            <i className="fas fa-phone" />
                          </MKTypography>
                          <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="regular"
                          >
                            (02) 1234 5678
                          </MKTypography>
                        </MKBox>
                        <MKBox display="flex" color="white" p={1}>
                          <MKTypography variant="button" color="white">
                            <i className="fas fa-envelope" />
                          </MKTypography>
                          <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="regular"
                          >
                            hello@gmail.com
                          </MKTypography>
                        </MKBox>
                        <MKBox display="flex" color="white" p={1}>
                          <MKTypography variant="button" color="white">
                            <i className="fas fa-map-marker-alt" />
                          </MKTypography>
                          <MKTypography
                            component="span"
                            variant="button"
                            color="white"
                            opacity={0.8}
                            ml={2}
                            fontWeight="regular"
                          >
                            ??????????????? ?????????....
                          </MKTypography>
                        </MKBox>
                        <MKBox mt={3}>
                          <MKButton variant="text" color="white" size="large" iconOnly>
                            <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                          </MKButton>
                          <MKButton variant="text" color="white" size="large" iconOnly>
                            <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                          </MKButton>
                          <MKButton variant="text" color="white" size="large" iconOnly>
                            <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                          </MKButton>
                        </MKBox>
                      </MKBox>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <MKBox component="form" p={2} method="post">
                      <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                        <MKTypography variant="h2" mb={1}>
                          ???????????????
                        </MKTypography>
                        <MKTypography variant="subtitle2" color="text" mb={2} mt={5}>
                          &quot;??? ?????? ??? ?????? ????????? ??????.&quot; ?????? ?????? ????????????. <br />
                          <br />
                          ????????? ????????? ?????? ?????? ?????????????????? <br />
                          <br />
                          ????????? ????????? ?????? ??? ????????? ?????????????????????.
                        </MKTypography>
                      </MKBox>
                      <MKBox pt={0.5} pb={3} px={3} />
                    </MKBox>
                  </Grid>
                </Grid>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
