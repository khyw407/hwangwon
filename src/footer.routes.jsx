import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MKTypography from "components/MKTypography";
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "향원 - 사람과 향이 머무는곳",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "blog", href: "https://section.blog.naver.com" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "privacy policy", href: "https://www.naver.com/" },
        { name: "licenses", href: "https://www.naver.com/" },
      ],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://www.naver.com/" }],
    },
    {
      name: "map",
      items: [
        {
          name: "terms & conditions",
          href: "https://map.naver.com/v5/search/%EA%B7%B8%EB%A6%B0%ED%8C%A9%ED%86%A0%EB%A6%AC/place/37741703?c=14148846.2570816,4489349.0924391,15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Hwangwon
      </MKTypography>
      .
    </MKTypography>
  ),
};
