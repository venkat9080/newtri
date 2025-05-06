import React from "react";
import "./styles.css";
import Vector from "../../Images/Vector.png";
import CloundImage from "../../Images/dateCloudImg.png.png";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const TgMenu = () => {
  const menu1Content = [
    "Home",
    "Categories",
    "IR Prime",
    "Event",
    "Bookstore",
    "Newsletter",
    "Video",
  ];
  const menu2Content = [
    "Fashion & Lifestyle",
    "Beauty & Wellness",
    "Food & Beverage",
    "Consumer Durables & IT",
    "Entertainment",
    "Home Decor & Furnishing",
    "Specialty Retail",
  ];

  return (
    <Box>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "column",
          justifyContent: "space-around",
          Width: 1450,
          height: 112,
          top: 113,
          p: "24px",
          borderTop: 1.01,
          borderColor: "#E8E8E8",
        }}
      >
        <Box
          sx={{
            display: "flex",
            Width: 1372.98,
            height: 18.05,
            top: 22.98,
            left: 39.98,
          }}
        >
          <Box sx={{ marginRight: "auto" }}>
            <img src={Vector}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: 646,
              height: 15,
              top: 24.5,
              left: 402,
            }}
          >
            {menu1Content.map((data, index) => (
              <Menu1 data={data} index={index} />
            ))}
          </Box>
          <Box sx={{ display: "flex", ml: "auto" }}>
            <img src={CloundImage}></img>
            <Typography
              sx={{
                color: "#616161",
                fontSize: 15.79,
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "Lato",
                marginLeft: 0.5,
              }}
            >
              Friday, 30 June 2023
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            Width: 987,
            Height: 15,
            top: 183,
            left: 228.5,
            overflowX: "hidden",
          }}
        >
          {menu2Content.map((data, index) => (
            <Menu2 data={data} index={index} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          Width: 883.76,
          maxHeight: 14,
          top: -0.22,
          p: "5px",
          overflowX: "auto",
        }}
      >
        {menu2Content.map((data, index) => (
          <Menu21 data={data} index={index} />
        ))}
      </Box>
    </Box>
  );
};

const Menu1 = ({ data, index }) => (
  <Box>
    <Typography
      className="tGmenu1Content"
      sx={{
        color: index === 0 ? "#E21B22" : "#111111",
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "roboto",
        letterSpacing: "0em",
      }}
    >
      {data}
    </Typography>
  </Box>
);

const Menu2 = ({ data, index }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    {index != 0 ? (
      <CircleIcon
        sx={{
          width: 2,
          height: 2,
          color: "#E21B22",
          mt: "auto",
          mb: "auto",
          pl: 1,
          pr: 1,
        }}
      />
    ) : null}
    <Typography
      sx={{
        fontFamily: "inter",
        color: "#595959",
        fontWeight: 500,
        fontSize: 13,
      }}
    >
      {data}
    </Typography>
  </Box>
);
const Menu21 = ({ data, index }) => (
  <Box
    sx={{
      display: "flex",
      maxHeight: 14,
      minWidth: "fit-content",
      pl: 1,
    }}
  >
    {index != 0 ? (
      <CircleIcon
        sx={{
          width: 2,
          height: 2,
          color: "#E21B22",
          pl: 1,
          pr: 1,
          mt: "auto",
          mb: "auto",
        }}
      />
    ) : null}

    <Typography
      sx={{
        fontFamily: "inter",
        color: "#595959",
        fontWeight: 500,
        fontSize: 13,
      }}
    >
      {data}
    </Typography>
  </Box>
);

export default TgMenu;
