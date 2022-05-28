/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import typography from "assets/theme/base/typography";

function SimpleFooter({ links, light }) {
  const { size } = typography;

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href} target="_blank">
          <MKTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        />
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

SimpleFooter.defaultProps = {
  links: [
    { href: "/", name: "Home" },
    { href: "/contact", name: "About Us" },
    { href: "https://www.naver.com", name: "Blog" },
    { href: "https://www.naver.com", name: "License" },
  ],
  light: false,
};

SimpleFooter.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default SimpleFooter;
