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
import { Card, CardContent, CardMedia, } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Slick
import Slider from "react-slick";

function Information() {
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
          많고 많은 신입 개발자 중에서, 왜 반드시 김혜연이어야 할까요?
        </MKTypography>
      </Grid>
      <MKBox
        width={{ xs:"100%", lg:"60%" }}
        container
        justifyContent="center"
        sx={{ mx: "auto", }}
      >
        <Slider {...settings}>
          <div>
          <Card>
              <CardMedia
                height="140"
              />
              <CardContent>
                <MKTypography gutterBottom variant="h5" component="div">
                Hardworking
                </MKTypography>
                <MKTypography lineHeight={2}  variant="body2" color="text.secondary">
                성실함만은 자부할 수 있습니다. 자신과 한 약속, 또는 다른 사람과 한 약속을 절대로 어기지 않습니다. <br /> 직장인 신분으로 매일 퇴근 후 코딩 학원을 다녔습니다. 단순히 출석만 한 게 아닙니다. 과제를 100% 제출하고 복습까지 진행했습니다. <br /> 강사님으로부터 준비성과 실행력을 인정받아 직장인임에도 불구하고, 전업으로 준비하는 학생들을 이끄는 팀 프로젝트 팀장까지 맡았습니다. 팀장으로서 프로젝트를 이끌어가며 체력적으로, 정신적으로 많이 지쳤지만 책임감을 가지고 끝까지 최선을 다했습니다. <br />그 결과 참여 팀 중 평가 1위를 받고, 학원 공식 홈페이지에 저희 팀의 결과물이 대표작으로 올라가게 되었습니다. <br />지식이 풍부한 개발자는 세상에 많지만, 자신의 말과 행동에 책임을 지고 움직이는 사람은 흔치 않습니다. 마음먹은 건 우직하게 밀고 나가는, 끈기 있는 개발자가 바로 김혜연입니다. 
                </MKTypography>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardMedia
                height="140"
              />
              <CardContent>
                <MKTypography gutterBottom variant="h5" component="div">
                A rookie with experience
                </MKTypography>
                <MKTypography lineHeight={2} variant="body2" color="text.secondary">
                사무실 경험만 6년, 업무/분위기 적응이 빠릅니다.  <br />
                 메일 쓰기는 물론 클라이언트 응대, 소비자 상담하는 방법까지 현장에서 익혔습니다. 보통 신입이 사무실에 처음 왔을 때 처음부터 숙지해야 할 것들을, 6년의 업무 경험을 통해 이미 숙달시켜 놓은 상태입니다.
                <br /> 사무실 경험이 있다는 건 비단 비즈니스 관련 스킬만을 뜻하는 건 아닙니다. 좋은 팀 분위기를 위해서는 어떤 자세를 취해야 하는지. 어떤 행동을 해서는 안 되는지 잘 파악하고 있습니다. 
                <br /> 기본 매너가 잘 갖춰져 있어 사람들을 당황스럽게 하는 돌발 행동(!)을 걱정할 필요가 없습니다. 때로는 열정적으로, 때로는 뜨뜻하게. 상황과 시기를 고려해 주변 사람들을 가장 기분 좋게 해 줄 수 있는, 6년 차 직장인 김혜연입니다. 
                </MKTypography>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardMedia
                height="140"
              />
              <CardContent>
                <MKTypography gutterBottom variant="h5" component="div">
                Communication Skills
                </MKTypography>
                <MKTypography lineHeight={2} variant="body2" color="text.secondary">
                커뮤니케이션이 잘 되는 사람입니다. <br />  사람들과 대화하는 걸 즐기고, 조직 내의 구성원들과 소통함에 있어 전혀 불편함을 느끼지 않습니다. <br />얼마 전 초보 개발자를 위한 커리어, 튜토리얼 인강을 들은 적이 있습니다. 거기에 개발자로서의 필수 역량 중 하나가 바로 '밥 같이 먹고 싶은 사람'이 되는 것이라고 했습니다. <br /> 이 '밥 먹고 싶은 사람'은 바로, 인성과 소통 능력을 갖춘 사람을 은유적으로 나타내는 표현입니다. 그런 점에 있어, 저는 제가 누구한테나 '밥 같이 먹고 싶은 사람'이라고 자부합니다.
                <br /> 또한, 커뮤니케이션이 잘 된다는 건 반드시 사교성과 관련된 말이 아님을 인지하고 있습니다. 훌륭한 커뮤니케이션 스킬이란, 상대방이 원하거나 말하고자 하는 것을 빠르게 캐치하고 적절한 피드백을 할 수 있는 능력입니다.
                <br /> 저는 이 점을 숙지하여 팀원이나 거래처 사람들과 소통할 때 그들의 입장에서 가장 알아듣기 쉽게 설명하는 방법을 고민합니다. 제 입장이 아닌, 청자를 고려하는 커뮤니케이션 스킬을 가진 사람이 바로 김혜연입니다. 
                </MKTypography>
              </CardContent>
          </Card>
          </div>
          <div>
          <Card>
              <CardMedia
                height="140"
                alt="green iguana"
              />
              <CardContent>
                <MKTypography gutterBottom variant="h5" component="div">
                Metacognition skills
                </MKTypography>
                <MKTypography lineHeight={2}  variant="body2" color="text.secondary">
                통상적으로 정의하는 메타인지 스킬은 다음과 같습니다; 계획 세우기, 긍정적 자기 대화, 자신에게 질문하기, 자신을 모니터링하기. <br /> 저는 메타인지 능력을 키우고자 노력하는 사람으로서, 늘 새로운 계획을 세우고 계속해서 자신을 모니터링합니다. 또한 긍정적인 피드백을 발판 삼아 더욱 큰 목표를 그려가는 인생을 살아가고 있습니다.  <br />저는 이러한 메타인지 능력이 개발자로서의 적성과도 큰 관련이 있다고 생각합니다. <br />저는 '작동'으로 만족하지 않고, 늘 '최적'을 고민하며 앞으로 나아갑니다. 업무에 필요하거나 관련된 지식들은 내 것으로 만들 때까지 끊임없이 공부할 예정입니다. <br />  배움을 멈추지 않는 개발자인 만큼, 빠른 성장 속도를 기대하셔도 좋습니다.
                </MKTypography>
              </CardContent>
          </Card>
          </div>
        </Slider>
      </MKBox>
    </Container>
  </MKBox>
);
}

export default Information;