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

import { Fade, Bounce } from "react-reveal";
import { FormatBold } from "@mui/icons-material";
import Workone from "pages/Presentation/sections/Workone";
import { Typing } from "typing-effect-reactjs";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Profile from "../Author/sections/Profile";

function AboutUs() {
  return (
    <>
      {/* <DefaultNavbar /> */}
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
            <Bounce>
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
            </Bounce>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={3}>
              안녕하세요!
            </MKTypography>
            <MKTypography variant="h3" color="white" opacity={0.8} mt={1} mb={3}>
              <Typing
                typeSpeed={150}
                deleteSpeed={100}
                text={[
                  "무한한 가능성이 있는",
                  "스나이퍼같은 집중력을 가진",
                  "감성과 이성이 조화로운",
                  "늘 새로운 목표를 세우고 실천해나가는",
                  "매일 밥 같이 먹고 싶은",
                ]}
                disableBlinkingOnEnd={10}
                smartBackspace
              />
              <MKTypography variant="body1" mt={1} color="white" opacity={0.8}>
                개발자 김혜연의 포트폴리오입니다.
              </MKTypography>
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
      <Fade Top>
        <Featuring />
      </Fade>
      <Fade Bottom>
        <Download />
      </Fade>
      <Fade Top>
        <Pages />
      </Fade>
      <Fade Top>
        <Workone />
      </Fade>
      <Bounce>
        <Testimonials />
      </Bounce>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
