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

// react-router-dom components

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

import { Link } from "@mui/material";

function Pages() {
  // eslint-disable-next-line no-unused-vars
  const renderData = data.map(({ image, name, route, description }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 7, lg: 10 } }} key={name}>
      <Link target="_blank" href={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" d />
      </Link>
      <MKTypography variant="body2" mt={1}>
        {description}
      </MKTypography>
    </Grid>
  ));

  return (
    <MKBox component="section" py={15} bgColor="#fff">
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold" mb={2} mt={-3}>
            💻 Hyeyeon's Projects
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={3}>
            협업 또는 혼자서 진행한 프론트엔드 개발 프로젝트들입니다.
          </MKTypography>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
