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
import { Tooltip } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Stacks() {
  return (
    <MKBox component="section" bgColor="#fff" py={15}>
      <MKTypography variant="h2" mb={2} textAlign="center">
        📁 Hyeyeon's Tech Stack
      </MKTypography>
      <MKTypography variant="body1" color="text" mb={10} textAlign="center">
        학원 과정과 인터넷 강의를 통해 배운 후, 실제 프로젝트에 적용시켜 본 기술 스택들입니다.
      </MKTypography>
      <Grid container item xs={8} md={7} justifyContent="center" mx="auto" textAlign="center">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="HTML5"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/html-5--v1.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="CSS3"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/css3.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="Javascript"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/javascript--v1.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="React"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/react-native.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="Typescript"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/typescript.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center" mt={{ xs: 1 }}>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="Visual Studio Code"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox
                component="img"
                src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
                width="80%"
              />
            </Tooltip>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Tooltip
              title="Github"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#344767",
                    "& .MuiTooltip-arrow": {
                      color: "#344767",
                    },
                  },
                },
              }}
            >
              <MKBox component="img" src="https://img.icons8.com/nolan/96/github.png" width="80%" />
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Stacks;
