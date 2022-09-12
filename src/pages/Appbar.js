import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "components/AppBar";
import Toolbar from "components/Toolbar";

const rightLink = {
  fontStyle: "Italic",
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const commonLink = {
  fontSize: 14,
  color: "common.white",
  ml: 6,
};

function AppAppBar(isLoggedIn) {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link variant="h6" underline="none" color="inherit" sx={{ fontSize: 24 }} href="/">
            Hyeyeon
          </Link>

          {/* 메인 메뉴 */}
          <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
            <Link color="inherit" variant="h6" underline="none" href="/blog" sx={commonLink}>
              Doggitter
            </Link>
            <Link variant="h6" underline="none" href="/test" sx={commonLink}>
              DOG MBTI
            </Link>
            <Link variant="h6" underline="none" href="/info" sx={commonLink}>
              INFO
            </Link>
          </Box>

          {/* 로그인 */}
          {isLoggedIn && (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <Link color="inherit" variant="h6" underline="none" href="/login" sx={rightLink}>
                Sign In
              </Link>
              <Link
                variant="h6"
                underline="none"
                href="/signup"
                sx={{ ...rightLink, color: "secondary.main" }}
              >
                Sign Up
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
