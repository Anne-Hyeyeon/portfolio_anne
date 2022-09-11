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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Slick
import Slider from "react-slick";

function Information() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MKBox component="section" py={15} bgColor="#fff">
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
          width="60%"
          container
          justifyContent="center"
          sx={{ mx: "auto", }}
        >
          <Slider {...settings}>
            <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <MKTypography gutterBottom variant="h5" component="div">
                    Lizard
                  </MKTypography>
                  <MKTypography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </MKTypography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
            <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <MKTypography gutterBottom variant="h5" component="div">
                    Lizard
                  </MKTypography>
                  <MKTypography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </MKTypography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
            <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <MKTypography gutterBottom variant="h5" component="div">
                    Lizard
                  </MKTypography>
                  <MKTypography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </MKTypography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
          </Slider>
        </MKBox>
        {/* <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid> */}
        {/* </Grid> */}
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
