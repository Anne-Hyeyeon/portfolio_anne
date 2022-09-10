/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultInfoCard icon="school" title="Education" direction="center" />
            <MKTypography variant="body2" color="text" textAlign="center">
              경희대학교 한국어학과, 국제학과
              <br /> 2011.03 ~ 2016.02
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultInfoCard icon="public" title="Language Skills" direction="center" />
            <MKTypography variant="body2" color="text">
              영어 - 상
              <br />
              (TOEIC 930, OPIC IH, 회화 가능)
              <br />
              중국어 - 하
              <br />
              (음독, 간단한 생활회화 가능)
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultInfoCard icon="accessibility" title="Hobbies" direction="center" />
            <MKTypography variant="body2" color="text" textAlign="center">
              👩‍💻 블로그 관리
              <br />
              💻 자막 없이 외국 유튜브 보기
              <br />
              👟 에어로빅, 점핑 운동하기
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
