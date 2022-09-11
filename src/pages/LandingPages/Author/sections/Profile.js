/* eslint-disable prettier/prettier */
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
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";


function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -25, md: -25 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Anne Hyeyeon"
              sx={{ width: 200, height: 200 }}
              shadow="xl"
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Hyeyeon Kim 🥰</MKTypography>
                {/* <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton> */}
              </MKBox>
              <MKBox>
                <MKTypography component="span" variant="body1">
                  2022.02~2022.06 신촌 코리아 IT 아카데미 프론트엔드 과정 수료
                </MKTypography>
                <MKTypography mt={2} variant="body2" fontWeight="light" color="text">
                  개발자가 되고 싶어 퇴근 후 6개월동안 코딩 공부를 했습니다!
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
