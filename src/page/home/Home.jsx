import React, { useEffect, useState } from "react";
import home_image from "../../assets/home_image.png";
import "./home.css";
import {
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "antd";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Define the threshold for adding the class
      const threshold = 100; // For example, add the class when scroll position is 100px from top

      if (scrollTop > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="main">
      <div className={`booking-wrap roboto-regular ${isScrolled ? 'content-fixed roboto-regular' : ''}`}>
        <div className="booking-wrap-form">
          <Box>
            <FormControl
              sx={{
                // m: 1,
                width: "250px",
                backgroundColor: "#D7D7D7",
                border: "none",
              }}
            >
              <select
                id="cars"
                style={{
                  fontSize: "14px",
                  border: "none",
                  backgroundColor: "#D7D7D7",
                  padding: "1.5rem",
                }}
              >
                <option style={{ backgroundColor: "white" }} value="1">
                  CẦN GIỜ - TP.HỒ CHÍ MINH
                </option>
                <option style={{ backgroundColor: "white" }} value="2">
                  CẦN GIỜ - VŨNG TÀU
                </option>
                <option style={{ backgroundColor: "white" }} value="3">
                  VŨNG TÀU - CẦN GIỜ
                </option>
                <option style={{ backgroundColor: "white" }} value="4">
                  VŨNG TÀU - TP.HỒ CHÍ MINH
                </option>
                <option style={{ backgroundColor: "white" }} selected value="5">
                  TP.HỒ CHÍ MINH - VŨNG TÀU
                </option>
                <option style={{ backgroundColor: "white" }} value="6">
                  TP.HỒ CHÍ MINH - CẦN GIỜ
                </option>
                <option style={{ backgroundColor: "white" }} value="7">
                  BẠCH ĐẰNG - CỦ CHI
                </option>
                <option style={{ backgroundColor: "white" }} value="8">
                  CỦ CHI - BẠCH ĐẰNG
                </option>
              </select>
            </FormControl>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { minWidth: "100px" },
            }}
            noValidate
            autoComplete="off"
            fontSize="15px"
            padding="1.5rem"
          >
            <FormControl variant="standard">
              <InputLabel style={{ fontSize: "20px" }}>NGÀY ĐI</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="date"
                style={{ fontSize: "15px", fontWeight: 300 }}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { minWidth: "50px" },
            }}
            noValidate
            autoComplete="off"
            fontSize="15px"
            padding="1.5rem"
          >
            <FormControl variant="standard ">
              <InputLabel style={{ fontSize: "20px" }}>GIỜ</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="time"
                defaultValue="12:00"
                style={{ fontSize: "15px" }}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box sx={{ width: "50px" }}>
            <div className="divider">
              <div className="line"></div>
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { minWidth: "100px" },
            }}
            noValidate
            autoComplete="off"
            fontSize="15px"
            padding="1.5rem"
          >
            <FormControl variant="standard">
              <InputLabel style={{ fontSize: "20px" }}>NGÀY VỀ</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="date"
                style={{ fontSize: "15px", fontWeight: 300 }}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { minWidth: "50px" },
            }}
            noValidate
            autoComplete="off"
            fontSize="15px"
            padding="1.5rem"
          >
            <FormControl variant="standard ">
              <InputLabel style={{ fontSize: "20px" }}>GIỜ</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="time"
                defaultValue="12:00"
                style={{ fontSize: "15px" }}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <button>ĐẶT VÉ</button>
        </div>
      </div>
      
      <img src={home_image} alt="" ></img>
    </div>
  );
}
