import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";

// reveal
import { Bounce } from "react-reveal";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import { Typing } from "typing-effect-reactjs";

// Scroll
import { useScrollSection } from "react-scroll-section";

function Top() {
  const StaticMenu = () => {
    const profileSection = useScrollSection("profile");
    return (
      <MKButton
        onClick={profileSection.onClick}
        color="default"
        sx={{ color: ({ palette: { dark } }) => dark.main }}
      >
        View More
      </MKButton>
    );
  };
  return (
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
          <MKTypography variant="h4" color="white" opacity={0.8} mt={5} mb={3}>
            <Typing
              typeSpeed={150}
              deleteSpeed={100}
              text={[
                "무한한 가능성이 있는",
                "늘 새로운 목표를 세우고 실천해나가는",
                "매일 밥 같이 먹고 싶은",
                "상상을 현실로 만들고 싶어하는",
              ]}
              disableBlinkingOnEnd={10}
              smartBackspace
            />
            <MKTypography variant="body1" mt={1} color="white" opacity={0.8}>
              프론트엔드 개발자 김혜연입니다.
            </MKTypography>
          </MKTypography>
          <StaticMenu />
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
            <MKTypography
              component="a"
              target="blank"
              variant="body1"
              color="white"
              href="https://github.com/Anne-Hyeyeon"
            >
              <i className="fab fa-github" />
            </MKTypography>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Top;
