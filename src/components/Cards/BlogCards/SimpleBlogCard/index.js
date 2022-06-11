import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SimpleBlogCard({ image, title, description }) {
  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="250px"
        position="relative"
        zIndex={1}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {imageTemplate}
      <MKTypography variant="h5" gutterBottom>
        {title}
      </MKTypography>
      <MKTypography variant="body2" component="p" color="text" mb={3}>
        {description}
      </MKTypography>
    </Card>
  );
}

SimpleBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SimpleBlogCard;
