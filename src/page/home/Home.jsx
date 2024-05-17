import React, { useEffect, useState } from "react";
import home_image from "../../assets/home_image.png";
import "./home.css";
import { Box, FormControl, InputLabel } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SlideComponent from "../../components/Slide/SlideComponent.jsx";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100;

      if (scrollTop > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const slides = [
    {
      title: "VUNG TAU: HO MAY TOURISM AREA PIER",
      address: "01A Tran Phu St., Ward 1, Vung Tau City",
      schedule: "Vung Tau - Ho Chi Minh City / Vung Tau - Ben Tre",
      weekdays: "10:00 12:00 14:00 16:00",
      weekends: "10:00 12:00 13:00 14:00 15:00 16:00",
      duration: "THỜI GIAN HÀNH TRÌNH DỰ KIẾN 120 PHÚT.",
    },
    {
      title: "CAN GIO: BẾN TẮC SUẤT",
      address: "Đường Tắc Xuất, KP. Giồng Ao,TT. Cần Thạnh, H. Cần Giờ",
      schedule: "Ho Chi Minh City - Can Gio - Vung Tau",
      weekdays: "10:00 12:00 14:00 16:00",
      weekends: "08:30 09:30 13:30 14:30",
      duration: "THỜI GIAN HÀNH TRÌNH DỰ KIẾN 90 PHÚT.",
    },
    {
      title: "HCMC: BACH DANG SPEED FERRY TERMINAL",
      address:
        "10B Ton Duc Thang St., Ben Nghe Ward, District 1, Ho Chi Minh City",
      schedule: "Ho Chi Minh City - Vung Tau",
      weekdays: "10:00 12:00 14:00 16:00",
      weekends: "08:00 09:00 10:00 12:00 14:00 16:00",
      duration: "THỜI GIAN HÀNH TRÌNH DỰ KIẾN 120 PHÚT.",
    },
  ];

  return (
    <>
      <div className="main">
        <img src={home_image} alt=""></img>
        <div
          className={`booking-wrap roboto-regular ${
            isScrolled ? "content-fixed roboto-regular" : ""
          }`}
        >
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
                  <option
                    style={{ backgroundColor: "white" }}
                    selected
                    value="5"
                  >
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
      </div>

      <div className="policy">
        <div className="container">
          <div className="welcome-graph">
            <div className="welcome-text">Chào mừng đến với GreenlinesDP</div>
            <div className="safe-time-text">
              Chúng tôi đã thực hiện hơn 9251 giờ an toàn
            </div>
            <div className="welcome-wrap">Vào ngày 30/04/2016, Công ty TNHH Công Nghệ Xanh DP đã chính thức
              khai trương chuyến vận tải hành khách đường thủy bằng tàu cao tốc
              hai thân, Tuyến TP. HCM - Vũng Tàu, Vũng Tàu - TP. HCM Ngày
              10/07/2020, GreenlinesDP đã chính thức đưa vào khai thác tuyến tàu
              cao tốc Bạch Đằng (Q1) - Bình Dương - Củ Chi</div>
              
            
          </div>
          <div className="schedule-slider">
            <div className="slideshow-left roboto-medium">
              <div className="wrapper-slide">
                <SlideComponent
                  title={slides[slideIndex].title}
                  address={slides[slideIndex].address}
                  schedule={slides[slideIndex].schedule}
                  weekdays={slides[slideIndex].weekdays}
                  weekends={slides[slideIndex].weekends}
                  duration={slides[slideIndex].duration}
                />
              </div>
              <div className="action-slide">
                <button onClick={prevSlide}>
                  <ArrowBackIosIcon
                    style={{ fontSize: "40px", color: "white" }}
                  />
                </button>
                <button onClick={nextSlide}>
                  <ArrowForwardIosIcon
                    style={{ fontSize: "40px", color: "white" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="my-policy">
            <h2>Chính sách giá vé của chúng tôi</h2>
          </div>
          <div className="tabs roboto-regular">
            <button className="button active">Vũng Tàu - TP.Hồ Chí Minh</button>
            <button className="button">TP.Hồ Chí Minh - Vũng Tàu</button>
          </div>
        </div>
      </div>
    </>
  );
}
