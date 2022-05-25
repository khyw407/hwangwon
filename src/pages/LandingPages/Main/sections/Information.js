import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "components/Cards/BlogCards/CenteredBlogCard";
import bgInfoImage from "assets/images/bg-main-info.jpeg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="신선한 원두"
                    description="매일 로스팅한 신선한 원두"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="건강"
                    description="천연 재료만을 사용한 베이커리 메뉴"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="합리적인 가격"
                    description="저렴해요 그러니까 좀 사먹어 개개기들아"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="노시니어존"
                    description="만 60세 이상 입구밴이요"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={bgInfoImage}
              title="다양한 메뉴를 확인하세요"
              description="진하게 로스팅된 원두의 맛과 좋은 재료만을 사용한 베이커리 메뉴를 만나보세요."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "click",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
