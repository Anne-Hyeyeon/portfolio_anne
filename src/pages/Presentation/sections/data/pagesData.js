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

import page1 from "assets/images/mypages/page_withdog.png";
import page2 from "assets/images/mypages/page_momentum.png";
import page3 from "assets/images/mypages/page_portfolio.png";
import page4 from "assets/images/mypages/page_josuanne.png";

import Stack from "@mui/material/Stack";
import MKBadge from "components/MKBadge";

export default [
  {
    image: page1,
    name: "🐶 신촌 코리아 IT아카데미 팀프로젝트 - 애견인 커뮤니티 Withdog",
    route: "/pages/landing-pages/about-us",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Github" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#CRUD" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page2,
    name: "🌴 바닐라 자바스크립트로만 만든 Chrome App - Momentum",
    route: "/pages/landing-pages/contact-us",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Github" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#CRUD" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page3,
    name: "🤩 직접 만든 포트폴리오 웹페이지",
    route: "/pages/authentication/sign-in",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Github" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#CRUD" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page4,
    name: "👩‍❤️‍👨부트스트랩 실습으로 만든 커플 다이어리 - Josuanne",
    route: "/pages/landing-pages/author",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Github" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#CRUD" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
];
