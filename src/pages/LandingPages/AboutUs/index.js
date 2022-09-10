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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Download from "pages/Presentation/sections/Download";
import Testimonials from "pages/Presentation/sections/Testimonials";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import Pages from "pages/Presentation/sections/Pages";
// eslint-disable-next-line import/order
import { FormatBold } from "@mui/icons-material";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import Profile from "../Author/sections/Profile";

function AboutUs() {
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      /> */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Better late than never.
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              프론트엔드 개발자 김혜연을 소개합니다.
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              View More
            </MKButton>
            <MKTypography
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h4"
              color="white"
              mt={8}
              mb={1}
            >
              Find me on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-github" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <FormatBold color="white" href="#" variant="body1" />
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Profile />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Featuring />
        <Download />
        <Pages />
      </Card>
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
            opacity={0.2}
          />
          <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
            <Grid
              container
              item
              xs={12}
              md={7}
              justifyContent="center"
              mx="auto"
              textAlign="center"
            >
              <MKTypography variant="h3" color="white">
                Do you love this awesome
              </MKTypography>
              <MKTypography variant="h3" color="white" mb={1}>
                UI Kit for ReactJS &amp; MUI?
              </MKTypography>
              <MKTypography variant="body2" color="white" mb={6}>
                Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                Creative Tim where you can find the Design System in HTML. Start a new project or
                give an old Bootstrap project a new look!
              </MKTypography>
              <MKButton
                variant="gradient"
                color="info"
                size="large"
                component="a"
                href="https://www.creative-tim.com/product/material-kit-react"
                sx={{ mb: 2 }}
              >
                Download Now
              </MKButton>
            </Grid>
          </Container>
        </MKBox>
      </Container>
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
          opacity={0.2}
        />
      </MKBox>
      <BuiltByDevelopers />
      <Testimonials />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
