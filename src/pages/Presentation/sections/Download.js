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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Download() {
  return (
    <MKBox component="section" py={15}>
      <Grid container item xs={8} md={7} justifyContent="center" mx="auto" textAlign="center">
        <MKTypography variant="h2" mb={4}>
          📁 Hyeyeon's Tech Stack
        </MKTypography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/html-5--v1.png"
              width="80%"
            />
          </Grid>
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/css3.png"
              width="80%"
            />
          </Grid>
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/javascript--v1.png"
              width="80%"
            />
          </Grid>
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/react-native.png"
              width="80%"
            />
          </Grid>
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/typescript.png"
              width="80%"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center" mt={{ xs: 1 }}>
          <Grid item xs={4} lg={2}>
            <MKBox
              component="img"
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              width="80%"
            />
          </Grid>
          <Grid item xs={4} lg={2}>
            <MKBox component="img" src="https://img.icons8.com/nolan/96/github.png" width="80%" />
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Download;
