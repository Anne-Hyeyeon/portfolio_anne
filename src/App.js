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
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// pages
import Top from "pages/Top";
import WhoIsHer from "pages/WhoIsHer";
import Stacks from "pages/Stacks";
import BottomRefer from "pages/BottomRefer";
import StrongPoints from "pages/StrongPoints";
import Projects from "pages/Projects";
import Profile from "pages/Profile";
import MyFooter from "examples/Footers/MyFooter";

// reveal
import { Fade, Bounce } from "react-reveal";

// Scroll
import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollingProvider>
        <Section id="top">
          <Top />
        </Section>
        <Section id="profile">
          <Profile />
        </Section>
        <Fade Top>
          <Projects />
        </Fade>
        <Fade Top>
          <StrongPoints />
        </Fade>
        <Fade Bottom>
          <Stacks />
        </Fade>
        <Fade Top>
          <WhoIsHer />
        </Fade>
        <Bounce>
          <BottomRefer />
        </Bounce>
        <MKBox pt={6} px={1} mt={6}>
          <MyFooter />
        </MKBox>
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
