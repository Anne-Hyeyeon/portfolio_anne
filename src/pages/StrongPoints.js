/* eslint-disable prettier/prettier */
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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Stack } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKBadge from "components/MKBadge";

// Slick
import Slider from "react-slick";

function StrongPoints() {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MKBox component="section" py={15}>
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={6}
        justifyContent="center"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <MKTypography variant="h2">👍 Hyeyeon's Strong Points</MKTypography>
        <MKTypography variant="body1" color="text" mb={10} mt={2}>
          많고 많은 신입 개발자들 중에서, <MKTypography component="span" variant="h4" >왜 반드시 김혜연이어야</MKTypography> 할까요?
        </MKTypography>
      </Grid>
      <MKBox
        width={{ xs:"100%", lg:"60%" }}
        justifyContent="center"
        sx={{ mx: "auto", }}
      >
        <Slider {...settings}>
          <div>
          <Card>
              <CardContent>
                <MKBox component="div" mt={2}>
                  <MKTypography variant="h5">A hardworking, responsible person</MKTypography>
                </MKBox>
                <MKTypography variant="body1" mb={1}>성실함만은 자부할 수 있습니다.</MKTypography>
                <MKTypography lineHeight={2}  variant="body2" color="dark">
               자신과 한 약속, 또는 다른 사람과 한 <b>약속을 절대로</b> 어기지 않습니다. <br /> 직장인 신분으로 매일 퇴근 후 코딩 학원을 다녔습니다. 단순히 출석만 한 게 아닙니다. <b>과제를 100%</b> 제출하고 복습까지 진행했습니다. <br /> 강사님으로부터 <b>준비성</b>과 <b>실행력</b>을 인정받아 직장인임에도 불구하고, 전업으로 준비하는 학생들을 이끄는 <b>팀 프로젝트 팀장</b>까지 맡았습니다. 팀장으로서 프로젝트를 이끌어가며 체력적으로, 정신적으로 많이 지쳤지만 책임감을 가지고 끝까지 최선을 다했습니다. <br />그 결과 참여 팀 중 <b>평가 1위</b>를 받고, 학원 공식 홈페이지에 저희 팀의 결과물이 대표작으로 올라가게 되었습니다. <br />지식이 풍부한 개발자는 세상에 많지만, 자신의 말과 행동에 책임을 지고 움직이는 사람은 흔치 않습니다. 마음먹은 건 우직하게 밀고 나가는, <b>끈기 있는 개발자</b>가 바로 김혜연입니다. 
                </MKTypography>
                <MKBox mt={2}>
                  <Stack direction="row" alignItems="flex-end" spacing={0.5}>                
                      <MKBadge badgeContent="#성실" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#끈기" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#책임감" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#팀프로젝트1위" variant="contained" color="secondary" container />
                    </Stack>
                  </MKBox>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardContent>
                <MKBox component="div" mt={2}>
                  <MKTypography variant="h5">A rookie with experience</MKTypography>
                </MKBox> 
                <MKTypography variant="body1" mb={1}>사무실 경험만 6년, 업무 숙지하는 속도와 환경 적응이 빠릅니다.</MKTypography>
                <MKTypography lineHeight={2} variant="body2" color="dark">
                 메일 쓰기는 물론 클라이언트 응대, 소비자 상담하는 방법까지 실무를 통해 익혔습니다. 보통 신입이 사무실에 처음 왔을 때 처음부터 숙지해야 할 것들을, <b>6년의 업무 경험</b>을 통해 이미 숙달시켜 놓은 상태입니다.
                <br /> 사무실 경험이 있다는 건 비단 비즈니스 스킬만을 뜻하는 건 아닙니다. <b>좋은 팀 분위기</b>를 위해서는 제가 어떤 태도와 자세를 취해야 하는지. 어떤 행동을 해서는 안 되는지 잘 파악하고 있습니다. 
                <br /> <b>기본 업무 매너</b>가 잘 갖춰져 있어 사람들을 당황스럽게 하는 돌발 행동이나 발언(!)을 걱정할 필요가 없습니다. 때로는 열정적으로, 때로는 뜨뜻하게. 상황과 시기를 고려해 주변 사람들의 기분을 <b>산뜻하게</b> 해 줄 수 있는, 6년 차 직장인 김혜연입니다. 
                </MKTypography>
                  <MKBox mt={2}>
                   <Stack direction="row" alignItems="flex-end" spacing={0.5}>                
                      <MKBadge badgeContent="#6년째직장인" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#눈치백단" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#회사경험있음" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#매너쟁이" variant="contained" color="secondary" container />
                    </Stack>
                  </MKBox>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardContent>
                <MKBox component="div" mt={2}>
                  <MKTypography variant="h5">Communication Skills</MKTypography>
                </MKBox>       
                <MKTypography variant="body1" mb={1}>커뮤니케이션 능력 : 말귀를 찰떡같이 알아듣고, 설명도 잘 합니다.</MKTypography>      
                <MKTypography lineHeight={2} variant="body2" color="dark">
                확실히 말씀드릴 수 있습니다. 저는 다른 사람들과 <b>커뮤니케이션</b>이 잘 되는 사람입니다.  사람들과 대화하는 걸 즐기고, 조직 내의 구성원들과 소통함에 있어 전혀 불편함을 느끼지 않습니다. <br />얼마 전 초보 개발자를 위한 커리어, 튜토리얼 인강을 들은 적이 있습니다. 거기에 개발자로서의 필수 역량 중 하나가 바로 <b>밥 같이 먹고 싶은 개발자</b>가 되는 것이라고 했습니다. <br /> 이 '밥 같이 먹고 싶은 사람'은 바로, <b>올바른 인성</b>과 <b>소통 능력</b>을 갖춘 사람을 은유적으로 나타내는 표현입니다. 그런 점에 있어, 저는 제가 누구한테나 '밥 같이 먹고 싶은 사람'이라고 자부합니다.
                <br /> 또한, 커뮤니케이션이 잘 된다는 건 반드시 사교성과 관련된 말이 아님을 인지하고 있습니다. 훌륭한 커뮤니케이션 스킬이란, 상대방이 원하거나 말하고자 하는 것을 <b>신속하게 파악</b>하고 <b>적절한 피드백</b>을 할 수 있는 능력입니다. 저는 업무를 진행할 때 말한 사람의 의도를 빠르게 캐치하고, 그 사람에게 필요한 답변을 찾아 내놓을 수 있는 사람입니다.
                <br /> 뿐만 아니라, 저는 팀원이나 거래처 사람들과 소통할 때 그들의 입장에서 가장 <b>알아듣기 쉽게 설명</b>하는 방법을 고민합니다. 제 입장이 아닌, <b>청자를 고려하는 커뮤니케이션</b> 스킬을 가진 사람이 바로 김혜연입니다. 
                </MKTypography>
                <MKBox mt={2}>
                  <Stack direction="row" alignItems="flex-end" spacing={0.5}>                
                      <MKBadge badgeContent="#커뮤니케이션" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#언어능력최상" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#사교성" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#같이밥먹고싶은개발자" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#청자중심커뮤니케이션" variant="contained" color="secondary" container />
                    </Stack>
                  </MKBox>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardContent>
                <MKBox component="div" mt={2}>
                <MKTypography variant="h5">Metacognition skills</MKTypography>
                </MKBox>
                <MKTypography variant="body1" mb={1}>메타인지 능력을 발달시키려고 노력하는 사람입니다.</MKTypography>
                <MKTypography lineHeight={2}  variant="body2" color="dark">
                통상적으로 정의되는 <b>메타인지 스킬</b>은 다음과 같습니다; 계획 세우기, 긍정적 자기 대화, 자신에게 질문하기, 자신을 모니터링하기. <br /> 저는 메타인지 능력을 키우고자 노력하는 사람으로서, 늘 새로운 계획을 세우고 계속해서 <b>자신을 모니터링</b>합니다. 또한 스스로에게 해 주는 <b>긍정적인 피드백</b>을 발판 삼아 더욱 큰 목표를 그려가는 인생을 살아가고 있습니다.  <br />
                저는 이러한 메타인지 능력이 <b>개발자로서의 적성</b>과도 큰 관련이 있다고 생각합니다. <br />저는 '작동'으로 만족하지 않고, 늘 <b>'최적'</b>을 고민하며 앞으로 나아갑니다. 업무에 필요하거나 관련된 지식들은 내 것으로 만들 때까지 <b>끊임없이 공부</b>할 예정입니다. <br />  배움을 멈추지 않는 개발자인 만큼, <b>빠른 성장 속도</b>를 기대하셔도 좋습니다.
                </MKTypography>
                <MKBox mt={2}>
                  <Stack direction="row" alignItems="flex-end" spacing={0.5}>                
                      <MKBadge badgeContent="#메타인지능력" variant="contained" color="secondary"  />
                      <MKBadge badgeContent="#셀프모니터링" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#예습복습좋아" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#공부좋아" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#진짜입니다" variant="contained" color="secondary" container />
                      <MKBadge badgeContent="#계획적인J성향" variant="contained" color="secondary" container />
                    </Stack>
                  </MKBox>
              </CardContent>
          </Card>
          </div>
        </Slider>
      </MKBox>
    </Container>
  </MKBox>
);
}

export default StrongPoints;