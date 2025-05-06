import React from "react";
import MainImage from "../../Images/Link ⏵ Figure ⏵ 169731-rbmaxpyfhd-1644061237.jpg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Divider, Typography } from "@mui/material";
import img1 from "../../Images/image 34.png";
import img2 from "../../Images/image 34 (1).png";
import img3 from "../../Images/image 34 (2).png";
import adsImg from "../../Images/image 41.png";
import LatestNewsImg1 from "../../Images/image 27.png";
import LatestNewsImg2 from "../../Images/LatestNews2.png";
import RemoveIcon from "@mui/icons-material/Remove";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header2 = () => {
  const CardData = [
    {
      id: 1,
      imageSrc: img1,
      title: "SELECT CITYWALK",
      description: "Wow! Momo Foods enters Bhopal with Wow!",
      type: "Citywalk",
      hashTag: "#reel stories podcast",
    },
    {
      id: 2,
      imageSrc: img2,
      title: "FOOD & BEVERAGE",
      description:
        "KFC opens another outlet in Punjab KFC opens another outlet in Punjab",
      type: "Beverage",
      hashTag: "#reel stories podcast",
    },
    {
      id: 3,
      imageSrc: img3,
      title: "SELECT CITYWALK",
      description: "FNP (Ferns N Petals) appoints Ashish Goels",
      type: "Citywalk",
      hashTag: "#reel stories podcast",
    },
  ];
  const LatestNewsData = [
    {
      id: 1,
      imageSrc: LatestNewsImg1,
      title: "Unwrapping the Archies’ reinvention plan",
    },
    {
      id: 2,
      imageSrc: LatestNewsImg2,
      title: "How AI is enhancing stores, How AI is enhancing stores",
    },
  ];
  const isMd = useMediaQuery("(min-width:600px)");
  const isXs = useMediaQuery("(max-width:599px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        p: 1,
        width: "100%",
        height: 809,
        top: 423.23,
        left: 36.21,
      }}
    >
      <Box>
        <Card>
          <CardMedia
            sx={{
              width: isMd ? "599px" : isXs ? "400.19px" : "420.65px",
              // width: 599,
              height: 347,
              top: 423.23,
              left: 35.21,
              objectFit: "contain",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            image={MainImage}
            alt="Image"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 567.55,
                height: 116.91,
                top: 644.68,
                left: 54.14,
              }}
            >
              <Button
                sx={{
                  width: 73.01,
                  height: 27.15,
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: 12.41,
                  backgroundColor: "#F92A28",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: 8.41,
                  }}
                >
                  in focus
                </Typography>
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: 21.43,
                    color: "#ffffff",
                  }}
                >
                  Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                  Surround Car
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Droid Sans",
                    fontWeight: 400,
                    fontSize: 16.85,
                    color: "#ffffff",
                  }}
                >
                  Rahul Gandhi
                </Typography>
              </Box>
            </CardContent>
          </CardMedia>
        </Card>

        <Box>
          {CardData.map((data) => (
            <Header2Card data={data} />
          ))}
        </Box>
      </Box>

      <Box className="Header2Box2">
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: 20.12,
          }}
        >
          Latest News
        </Typography>
        <RemoveIcon sx={{ color: "#CC0000" }} />
        {LatestNewsData.map((data) => (
          <LatestNewsCard data={data} />
        ))}
        <Box>
          <Divider sx={{ paddingTop: 1 }} />
          <Box className="LatestNews2ndCardBox">
            <Typography
              sx={{
                width: 304.58,
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 15,
                paddingTop: 1,
                // height: 36,
                // top: 980.19,
                // left: 680.29,
              }}
            >
              Croma opens 58 outlets in 6, Croma retails more than 16,000
            </Typography>
            <Typography
              sx={{
                width: 304.58,
                color: "#666666",
                fontSize: "Inter",
                fontSize: "13.97",
                fontWeight: 400,
              }}
            >
              These companies created a lot of hype when they listed on the...
            </Typography>
          </Box>
        </Box>
        <Box>
          <Divider sx={{ paddingTop: 1, marginTop: 1 }} />
          <Box className="LatestNews2ndCardBox">
            <Typography
              sx={{
                width: 304.58,
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 15,
                paddingTop: 1,
                // height: 36,
                // top: 980.19,
                // left: 680.29,
              }}
            >
              Select Citywalk opens 4 new stores in June
            </Typography>
            <Typography
              sx={{
                width: 304.58,
                color: "#666666",
                fontSize: "Inter",
                fontSize: "13.97",
                fontWeight: 400,
              }}
            >
              These companies created a lot of hype when they listed on the...
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="Header2Box3">
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          - Advertisement -
        </Typography>
        <img src={adsImg}></img>
      </Box>
    </Box>
  );
};

const Header2Card = ({ data }) => {
  return (
    <Box className="Header1CardBox">
      <Card
        sx={{
          maxWidth: 410.48,
          height: 90.67,
          top: 257.67,
          left: 974.12,
          // borderRadius: 6.01,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 117,
            height: 96.55,
            top: 254.72,
            left: 68.95,
            // borderRadius: 5.65,
          }}
          image={data.imageSrc}
          alt="Image"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",

            marginRight: "auto",
            width: 251.46,
            height: 55.1,
            top: 275.42,
            left: 649.87,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#E21B22",
                fontFamily: "roboto",
                fontWeight: 600,
                fontSize: 14.69,
              }}
              component="Box"
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "inter",
                fontWeight: 400,
                fontSize: 16.27,
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

const LatestNewsCard = ({ data }) => {
  return (
    <Box className="Header2CardBox">
      <Card
        sx={{
          boxShadow: "none",
          width: 344.01,
          height: 238,
          top: 702.19,
          left: 680.29,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 343,
            height: 184,
            top: 466.19,
            left: 680.21,
            borderRadius: 1.65,
          }}
          image={data.imageSrc}
          alt="Image"
        />
        <CardContent sx={{ padding: 0, lineHeight: 22 }}>
          <Typography
            sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 16.94 }}
          >
            {data.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Header2;
