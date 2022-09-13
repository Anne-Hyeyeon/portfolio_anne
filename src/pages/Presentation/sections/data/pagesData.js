/* eslint-disable import/no-unresolved */
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
    name: "🐶 기획부터 디자인, 개발과 배포까지 모든 과정을 직접 진행한 - 애견인 커뮤니티 Withdog",
    route: "https://github.com/Anne-Hyeyeon/withdog_teamproject_KoreaIT",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Firebase" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Github" variant="contained" color="secondary" container />
        <br />
        <MKBadge badgeContent="#Rest API" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page2,
    name: "🌴 바닐라 자바스크립트로만 만든 Chrome App - Momentum",
    route: "https://github.com/Anne-Hyeyeon/Nomadcoders_momentum",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#Vanila JS" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#HTML" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#CSS" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Rest API" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page3,
    name: "🤩 직접 만든 포트폴리오 웹페이지",
    route: "https://github.com/Anne-Hyeyeon/portfolio_anne",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Material UI" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Eslint" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Prettier" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
  {
    image: page4,
    name: "👩‍❤️‍👨부트스트랩 실습으로 만든 커플 다이어리 - Josuanne",
    route: "https://github.com/Anne-Hyeyeon/josuanne_couplediary",
    description: (
      <Stack direction="row" alignItems="flex-end" spacing={0.5}>
        <MKBadge badgeContent="#React" variant="contained" color="secondary" container />
        <MKBadge badgeContent="#Material UI" variant="contained" color="secondary" container />
      </Stack>
    ),
  },
];
