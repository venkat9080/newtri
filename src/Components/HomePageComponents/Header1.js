import React from "react";
import img1 from "../../Images/image 43.png";
import img2 from "../../Images/Link ⏵ news4.jpg.png";
import img3 from "../../Images/Link ⏵ news4.jpg (1).png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header1 = () => {
  const isMd = useMediaQuery("(min-width:600px)");
  const isXs = useMediaQuery("(max-width:599px)");
  const CardData = [
    {
      id: 1,
      imageSrc: img1,
      title: "HOTSPOT",
      description: "Luxury hotspots: 5 most expensive high streets in the..",
    },
    {
      id: 2,
      imageSrc: img2,
      title: "AI",
      description: "5 ways to leverage the power of ChatGPT in retail",
    },
    {
      id: 3,
      imageSrc: img3,
      title: "SHIPPING",
      description: "Reliance to open 250 Azorte stores in 2-3 years",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%", // Full width
        // height: 160.43,
        // width: isMd ? "1447" : isXs ? "399px" : "1447",
        height: isMd ? "160.43px" : isXs ? "101px" : "160.43px",
        top: isMd ? "222.79px" : isXs ? "87px" : "222.79px",
        backgroundColor: "#F8F9FA",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: isMd ? "1322.81px" : isXs ? "380px" : "1322.81px",
          height: isMd ? "127.34px" : isXs ? "80px" : "127.34px",
          top: isMd ? "239.33px" : isXs ? "97.5px" : "239.33px",
          left: isMd ? "964.21px" : isXs ? "16.43px" : "964.21px",
          overflowX: "auto",
          p: 1,
        }}
      >
        {CardData.map((data) => (
          <Header1Card data={data} />
        ))}
      </Box>
    </Box>
  );
};

const Header1Card = ({ data }) => {
  const isMd = useMediaQuery("(min-width:600px)");
  const isXs = useMediaQuery("(max-width:599px)");
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: isMd ? "420.65px" : isXs ? "272.19px" : "420.65px",
        minHeight: isMd ? "127.34px" : isXs ? "80.12px" : "127.34px",
        top: isMd ? "239.33px" : isXs ? "-0.35px" : "239.33px",
        left: isMd ? "964.21px" : isXs ? "-0.01px" : "964.21px",
      }}
    >
      <Box
        sx={{
          minWidth: isMd ? "420.65px" : isXs ? "267.56px" : "267.56px",
          minHeight: isMd ? "127.34px" : isXs ? "60.75px" : "60.75px",
          top: isMd ? "239.33px" : isXs ? "-9.33px" : "-9.33px",
          left: isMd ? "964.21px" : isXs ? "4.45px" : "4.45px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: isMd ? "117.04px" : isXs ? "75.73px" : "75.73px",
            height: isMd ? "96.55px" : isXs ? "60.75px" : "60.75px",
            top: isMd ? "254.72px" : isXs ? "9.33px" : "9.33px",
            left: isMd ? "521.53px" : isXs ? "4.45px" : "4.45px",
            borderRadius: isMd ? "5.65px" : isXs ? "3.66px" : "3.66px",
            // borderRadius: "5.65px",
            ml: "auto",
          }}
          image={data.imageSrc}
          alt="Image"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
            maxWidth: 251.46,
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
                fontSize: isMd ? "14.69px" : isXs ? "9.5px" : "9.5px",
                lineHeight: "21.47px",
              }}
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "inter",
                fontWeight: 400,
                // fontSize: 16.27,
                fontSize: isMd ? "16.27px" : isXs ? "10.53px" : "10.53px",
                lineHeight: "20.34px",
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Header1;
