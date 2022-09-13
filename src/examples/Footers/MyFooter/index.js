/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MKBox from "components/MKBox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MKTypography from "components/MKTypography";
import { FormatBold } from "@mui/icons-material";

function MyFooter() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" textAlign="center" mb={8}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Hyeyeon Kim
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
  return (
    <MKBox
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "10vh",
      }}
    >
      <CssBaseline />
      <MKBox display="flex" justifyContent="center" alignItems="center">
        <MKTypography
          component="a"
          target="blank"
          variant="h2"
          color="dark"
          href="https://github.com/Anne-Hyeyeon"
          mr={3}
        >
          <i className="fab fa-github" />
        </MKTypography>
        <MKTypography
          component="a"
          target="blank"
          variant="h1"
          href="https://blog.naver.com/khy2106/222766215985"
          mr={3}
          pt={2}
        >
          <FormatBold color="dark" />
        </MKTypography>
        <MKTypography
          component="a"
          target="blank"
          variant="h2"
          color="dark"
          href="https://www.instagram.com/anne_hyeyeon/"
        >
          <i className="fab fa-instagram" />
        </MKTypography>
      </MKBox>
      <Box
        component="footer"
        sx={{
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </MKBox>
  );
}

export default MyFooter;
