import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Images/logo.png";
import { Button, Card, CardMedia } from "@mui/material";
import MenuIconImg from "../../Images/Vector.png";
import MobViewSearchImg from "../../Images/MobViewSearchImg.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: "#B0B0B0",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const isMd = useMediaQuery("(min-width:600px)");
  const isXs = useMediaQuery("(max-width:599px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none", pb: 2, pt: 1 }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    width: 14.32,
                    height: 14.12,
                    top: 48.39,
                    left: 40.54,
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{
                  fontFamily: "roboto",
                  fontSize: 14.12,
                  fontWeight: 400,
                  lineHeight: 16.55,
                }}
                placeholder="Search here..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
            <img src={MenuIconImg}></img>
          </IconButton>
          <Card sx={{ ml: "auto", boxShadow: "none" }}>
            <CardMedia
              component="img"
              image={logo}
              alt="logo"
              sx={{
                width: isMd ? "284.65px" : isXs ? "126.72px" : "222.07px",
                height: isMd ? "76.23px" : isXs ? "33.94px" : "59.47px",
                top: isMd ? "12px" : isXs ? "7.42px" : "300px",
                left: isMd ? "583.25px" : isXs ? "134.05px" : "611.18px",
                height: "auto",
              }}
            ></CardMedia>
          </Card>
          <Box
            className="subscribeAndSignIn"
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
          >
            <Button
              sx={{
                backgroundColor: "#E21B22",
                width: 87.97,
                fontFamily: "roboto",
                fontSize: 10.67,
                fontWeight: 700,
                alignItems: "center",
              }}
              variant="filled"
            >
              subscribe
            </Button>
            <Button
              sx={{
                color: "#0A0A0A",
                fontFamily: "roboto",
                fontSize: 10.67,
                fontWeight: 700,
                alignItems: "center",
              }}
              variant="filled"
            >
              sign in
            </Button>
          </Box>
          <IconButton sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
            <img src={MobViewSearchImg}></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
