/* eslint-disable import/no-duplicates */
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



import React from 'react';
import { Container, Link } from '@mui/material';
import MKBox from 'components/MKBox';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import MKTypography from 'components/MKTypography';

function Testimonials() {
  return (
    <MKBox component="section" py={15} bgColor="#fff">
         <Container maxWidth="lg">
            <MKTypography
            variant="h2"
            sx={{
                fontFamily:'Nanum Myeongjo',
                textAlign: 'center',
                fontSize: 30

            }}>     
        So The last will be first <br />
        </MKTypography>
        <MKTypography
        sx={{
                fontFamily:'Nanum Myeongjo',
                textAlign: 'center',
                fontSize: 15,
                mb:5
            }}
        >
            <MenuBookTwoToneIcon fontSize="small" sx={{ mr:1 }} />
            Matthew 20:16
        </MKTypography> 
        <MKTypography
            variant="body2" 
            sx={{
                textAlign: 'center',

            }}>     
        비전공자로서, 개발 공부를 한 시간은 상대적으로 적을 수 있습니다. <br />그러나 새로 시작하는 사람만이 가질 수 있는 열정과 호기심은 절대로 모자라지 않습니다. <br /> 나중 된 자가 먼저 되는 날까지, 변하지 않는 성실함과 끈기로 앞으로 나아가가겠습니다.
        </MKTypography>
        <MKTypography
            variant="body2" 
            mt={5}
            sx={{
                textAlign: 'center',

            }}>     
        <Link underline="hover" href="mailto:khy2106@naver.com">✉️ khy2106@naver.com</Link>
        </MKTypography>
        <MKTypography
            variant="body2" 
            mt={1}
            sx={{
                textAlign: 'center',

            }}>     
        <Link underline="hover" href="https://github.com/Anne-Hyeyeon">🖥 https://github.com/Anne-Hyeyeon</Link>
        </MKTypography>
        <MKTypography
            variant="body2" 
            mt={1}
            sx={{
                textAlign: 'center',

            }}>     
        <Link underline="hover" href="https://blog.naver.com/khy2106">📝 https://blog.naver.com/khy2106</Link>
        </MKTypography>
    </Container>
    </MKBox>
  );
}

export default Testimonials;
