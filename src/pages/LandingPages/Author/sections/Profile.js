/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
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
import profilePicture from "assets/images/bruce-mars.jpg";




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
                alt="Anne Hyeyeon"
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
              <MKTypography variant="body2" mb={2}>
                  1992년 12월 29일생
                </MKTypography>
                <MKTypography variant="body2">
                  ・ 2018.11 ~ 유통회사 온라인 폐쇄몰 MD로 근무 중
                </MKTypography>
                <MKTypography variant="body2">
                ・ 2022.02 ~ 2022.06 신촌 코리아 IT 아카데미 프론트엔드 과정 수료
                </MKTypography>
                  <MKTypography mt={3} variant="h4">
📔 이야기 더 보기 
<ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

        <ExpandMoreIcon />
        </ExpandMore>

                  </MKTypography>
                

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <MKTypography component="span" variant="h6">
                🏃‍♀️ 1월부터 6월까지 : 윤종신 노래 아님
                </MKTypography>
        <MKTypography lineHeight={2} mt={2} mb={10} variant="body2" fontWeight="light" color="dark">
        2022년 1월부터 6월까지, 프론트엔드 개발자가 되기 위해 매일 퇴근 후 신촌에 있는 오프라인 코딩 학원에 가서 세 시간씩 수업을 들었습니다. 수업이 끝나면 1~2시간씩 학원에서 그날 배운 내용을 복습하고, 과제를 진행했습니다. 그렇게 2시에 잠들고, 출근하기 위해 7시에 일어나는 생활을 약 5~6개월 정도 지속했습니다. <br /> 웹페이지를 제작하거나 프로젝트를 진행해야 하는, 난이도 높은 과제가 있는 날에는 회사 점심시간까지 반납해야 할 때도 있었습니다. 솔직히 말하면, 어떻게 버텼는지 참 신기합니다. 하지만 중간에 포기하지 않고 그때의 경험을 제 포트폴리오에 녹아내고 있는 지금, 참 스스로 장하고 잘했다는 생각이 듭니다. 제 독기(?), 끈기와 성실함을 실제 보낸 시간으로 증명할 수 있어서 참 기쁩니다. <br /> 프론트엔드 개발자 김혜연으로서의 가장 두드러지는 특징, 가장 어필하고 싶은 부분을 스스로 꼽아보자면 이 1~6월까지의 시간을 보여드리고 싶습니다. 
 
                </MKTypography>
        <MKTypography component="span" variant="h6">
                😎 소프딱 : 소심한 관종에겐 프론트엔드가 딱
                </MKTypography>
        <MKTypography lineHeight={2} mt={2} mb={10} variant="body2" fontWeight="light" color="dark">
        저는 소심한 관종입니다. <br /> 어떤 일을 맡았을 때, 처음에는 눈에 띄지 않는 듯 조용히 일하다가, 마지막에 모두가 놀랄 만한 기가 막힌 완성품을 ‘짠’ 하고 보여주는 걸 좋아합니다. 이렇게 제가 만든 작품이 다른 사람들로부터 관심과 인정을 받을 때 찐 기쁨을 느낍니다. <br />
그러나 아쉽게도, 보통 이런 관심을 받기 위해서는 뛰어난 손재주가 필요합니다. 사람들에게 주목받기 쉬운 능력은 주로 요리, 그림, 글씨, 캘리그래피 같은 예술의 영역에 한정되어 있습니다. 저는 아쉽게도 이런 능력이 많이 부족한, 소위 말하는 '똥손'이었습니다. 그러나 이렇게 손재주가 없다는 이유만으로 관종의 삶을 포기해야 하는 게, 늘 아쉬웠습니다. <br />
그러다 손재주가 뛰어나지 않아도, 다른 의미의 ‘손재주’로 인정받을 수 있는 프론트엔드 개발자의 길에 눈을 뜨게 되었습니다.  HTML, CSS 강의를 맛보기로 듣고 나서 친구들에게 완성작 링크를 뿌리며 그동안 맛보지 못했던 쾌감을 느꼈습니다! 그 순간, ‘아, 어쩌면 프론트엔드 개발자가 소심한 관종인 나한테는 천직일 수도 있겠다’라는 생각이 들었습니다. <br /> 물론 코딩은 쉽지 않습니다. 하지만 그 과정을 마지막에 짠 하고 선보일 무언가가 있다는 게 소심한 관종을 설레게 합니다. 이것이 엉덩이에 땀띠가 나도, 모든 과정이 즐겁게 느껴지게 만드는 원동력입니다.  
                </MKTypography>
                <MKTypography component="span" variant="h6">
                🙋‍♀️ 온라인 MD, 고객으로서 미리 맛본 개발의 세계
                </MKTypography>
                <MKTypography lineHeight={2} mt={2} variant="body2" fontWeight="light" color="dark">
       현재 유통 회사에 재직 중입니다. 회사의 B2B 폐쇄몰 개발/유지 보수를 외부 업체에 맡기게 되면서, 현업자로서 모든 개발 과정에 참여하게 되었습니다. <br /> B2B 사이트 특성상, 거래 업체마다 커스터마이징된 기능을 쉽게 세팅할 수 있게 만드는 게 핵심이었습니다. <br /> (ex. 같은 상품 코드이지만 A 업체 폐쇄몰에는 10,000원 B 업체 폐쇄몰에는 15,000에 올려야 함. 이걸 현직자들이 클릭 몇 번으로 쉽게 세팅할 수 있는 몰을 만드는 게 목표) <br /> 물론 직접 코드 작성을 해본 건 아니었지만, 사이트의 완성도 높이고 간결하게 커뮤니케이션하기 위해서는 현직자의 초반 기획, 방향성 수립이 굉장히 중요하다는 사실을 깨달았습니다. <br /> 또한 홈페이지를 만들어가는 도중 개발자들과 버그, 개선점에 대해 수없이 피드백을 주고받으며 개발자들이 어떤 역할을 맡고 있으며 어떤 과정을 통해 웹페이지를 만들어가는지 알아갈 수 있었습니다.  <br />이 과정을 통해 후에 개발자로서 일하게 될 제 모습을 미리 떠올리고 커리어 계획을 수립해볼 수 있었습니다. <br />이처럼 유통 MD 현직자로서의 경험은 개발자가 되고자 하는 동기를 심어주었습니다. 이뿐만 아니라, 후에 개발 직무를 맡게 되었을 때도 고객, 사용자와 소통하는 데 큰 도움을 줄 것이라고 생각합니다.

</MKTypography>
      </Collapse>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
