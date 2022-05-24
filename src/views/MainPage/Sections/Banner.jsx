import React from "react";
import Typography from "../../../components/CustomTypography";
import BannerLayout from "./BannerLayout";

const backgroundImage =
  "https://t3.ftcdn.net/jpg/02/11/60/50/240_F_211605085_ZuGqs3OwvoKiLFwOrQudVqF3rY0WEvGe.jpg";

const Banner = () => {
  return (
    <BannerLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Everyday
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        All you need is love and more coffee.
      </Typography>
    </BannerLayout>
  );
};

export default Banner;
