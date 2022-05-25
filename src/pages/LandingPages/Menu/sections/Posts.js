import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SimpleBlogCard from "components/Cards/BlogCards/SimpleBlogCard";
import post1 from "assets/images/menu/menu1.jpeg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check Our Special Menu
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <SimpleBlogCard
              image={post1}
              title="Coffee Test"
              description="testsetststafasdfasdfasdfasfasfasfasfasfasfasasfd"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
