/* eslint-disable react/no-unescaped-entities */
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
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 3 }}>
      <Container>
        <MKBox
          variant="gradient"
          bgColor="dark"
          position="relative"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <MKBox
            component="img"
            src={bgImage}
            alt="pattern-lines"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            zIndex={1}
            opacity={0.05}
          />
          <Container sx={{ position: "relative", zIndex: 2, py: 6 }}>
            <Grid
              container
              item
              xs={12}
              md={7}
              justifyContent="center"
              mx="auto"
              textAlign="center"
            >
              <MKTypography variant="h2" color="white" mb={4}>
                📁 Hyeyeon's Tech Stack
              </MKTypography>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/html-5--v1.png"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/css3.png"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/javascript--v1.png"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/react-native.png"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/typescript.png"
                    width="100%"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
                    width="100%"
                  />
                </Grid>
                <Grid item xs={4} lg={2}>
                  <MKBox
                    component="img"
                    src="https://img.icons8.com/nolan/96/github.png"
                    width="100%"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Download;
