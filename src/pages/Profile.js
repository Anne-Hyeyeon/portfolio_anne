/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import * as React from "react"
import { styled, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/anne-hyeyeon.jpg";




function Profile() {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }} bgColor="#fafafa">
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/* <Button onClick={alert("hello")}> */}
            <MKBox mt={{ xs: 0, md: -25 }} 
            textAlign="center">
              <MKAvatar
                src={profilePicture}
                sx={{ width: 200, height: 200 }}
                shadow="xl"
              />
            </MKBox>
          {/* </Button> */}
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Hyeyeon Kim 🥰</MKTypography>
              </MKBox>
              <MKBox>
              <MKTypography variant="h6" mb={2}>
              ・ 2022.02 ~ 2022.06 신촌 코리아 IT 아카데미 프론트엔드 과정 수료
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 문제가 생기면 해결될 때까지 물고 놓아주지 않습니다. 몰입력 짱! 🐶
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 설사 문제가 해결됐더라도, 늘 더 나은 방법에 대한 미련이 생기는 프로 뒷끝러입니다. 🤔
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 공부는 개발자의 숙명, 퇴근 후 숨 쉬듯 공부하는 루틴이 잘 형성되어 있는 사람입니다. 💻
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 타인을 배려하는 따뜻한 리더십을 지닌 사람입니다. 🙆‍♀️
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 구글링은 자신있습니다. (초등학교 정보사냥대회 전교 1등 출신! 네... TMI입니다. 😽) 
                </MKTypography>
                <MKTypography variant="body2" mb={1}>
                  ・ 안 그런 척 하면서, 조용히 결과물로 인정 받는 거 좋아하는 소심한 관종입니다. 💃🏽
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
