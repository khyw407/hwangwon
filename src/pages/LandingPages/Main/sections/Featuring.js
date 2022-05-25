import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultCounterCard from "components/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1000}
              separator=","
              title="음료"
              description="음료종료가 엄청 많아요"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={10}
              suffix="+"
              title="베이커리"
              description="빵종류 개많음ㅋㅋ"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={9}
              suffix="-18"
              title="운영시간"
              description="카페는 칼퇴가 제맛이지"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
