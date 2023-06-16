import React from "react";
import { Stack, Avatar, Typography, Button, Box } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import Image from "../images//img1.png";
import Image2 from "../images//img2.png";
import Image3 from "../images//img3.png";
import { useState } from "react";

const ValuationProcess = () => {
  const [netCoins, setNetCoins] = useState(0);
  const [grossCoins, setGrossCoins] = useState(0);
  const [hours, setHours] = useState(144);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [targetDate, setTargetDate] = useState(new Date());
  const [timer, setTimer] = useState(false);
  const [btnColor, setBtnColor] = useState("#4B0082");

  React.useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user")!);
    setNetCoins(id.netCoins);
    setGrossCoins(id.grossCoins);
    console.log(id);
  });

  function updateTimer() {
    const currentDate = new Date();
    console.log(targetDate);
    console.log(currentDate);
    const remainingTime = targetDate.getTime() - currentDate.getTime();

    console.log(remainingTime);
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    setHours(hours);
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    setMinutes(minutes);
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    setSeconds(seconds);

    if (remainingTime <= 0) {
      setTimer(false);
      setBtnColor("#4B0082");
    }
    setInterval(updateTimer, 1000);
  }

  const handler = () => {
    const newtargetDate = new Date();
    targetDate.setHours(newtargetDate.getHours() + 144);
    setTargetDate(newtargetDate);
    console.log(targetDate);
    setNetCoins(netCoins + 100);
    console.log(netCoins);
    setGrossCoins(grossCoins + netCoins + 100);
    setTimer(true);
    setInterval(updateTimer, 1000);
    let idd = JSON.parse(localStorage.getItem("user")!);
    fetch("http://localhost:5000/api/user/" + idd._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grossCoins: grossCoins + 100 + netCoins,
        netCoins: netCoins + 100,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
      });

    console.log(idd);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        margin={2}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar src={Image} alt="eccr"></Avatar>
          <Stack>
            <Typography variant="h6">alfredo_rosser1</Typography>
            <Typography variant="body2" color="#968C9D">
              6 June 2021, 12:10 pm
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Stack>
            <Stack direction="row">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8308 7.4942C17.1557 7.4942 20.6617 9.846 20.6617 12.7471C20.6617 15.6482 17.1557 18 12.8308 18C8.50598 18 5 15.6482 5 12.7471C5 9.846 8.50598 7.4942 12.8308 7.4942Z"
                  fill="#FFE28C"
                />
                <g filter="url(#filter0_d_2_21)">
                  <path
                    d="M12.8308 5.32975C17.1557 5.32975 20.6617 7.68155 20.6617 10.5826C20.6617 13.4837 17.1557 15.8355 12.8308 15.8355C8.50598 15.8355 5 13.4837 5 10.5826C5 7.68155 8.50598 5.32975 12.8308 5.32975Z"
                    fill="#FFD559"
                  />
                </g>
                <g filter="url(#filter1_d_2_21)">
                  <path
                    d="M12.8308 3.16446C17.1557 3.16446 20.6617 5.51626 20.6617 8.41736C20.6617 11.3185 17.1557 13.6703 12.8308 13.6703C8.50598 13.6703 5 11.3185 5 8.41736C5 5.51626 8.50598 3.16446 12.8308 3.16446Z"
                    fill="#FFCB30"
                  />
                  <path
                    d="M12.8308 3.16446C17.1557 3.16446 20.6617 5.51626 20.6617 8.41736C20.6617 11.3185 17.1557 13.6703 12.8308 13.6703C8.50598 13.6703 5 11.3185 5 8.41736C5 5.51626 8.50598 3.16446 12.8308 3.16446Z"
                    fill="#FFCB30"
                  />
                  <path
                    d="M12.8308 3.16446C17.1557 3.16446 20.6617 5.51626 20.6617 8.41736C20.6617 11.3185 17.1557 13.6703 12.8308 13.6703C8.50598 13.6703 5 11.3185 5 8.41736C5 5.51626 8.50598 3.16446 12.8308 3.16446Z"
                    fill="#FFCB30"
                  />
                </g>
                <g filter="url(#filter2_d_2_21)">
                  <path
                    d="M12.8308 0.999997C17.1557 0.999997 20.6617 3.3518 20.6617 6.2529C20.6617 9.15399 17.1557 11.5058 12.8308 11.5058C8.50598 11.5058 5 9.15399 5 6.2529C5 3.3518 8.50598 0.999997 12.8308 0.999997Z"
                    fill="#FFBF00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2_21"
                    x="0"
                    y="4.32974"
                    width="23.6617"
                    height="18.5058"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_21"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_21"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_2_21"
                    x="0"
                    y="2.16446"
                    width="23.6617"
                    height="18.5058"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_21"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_21"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_2_21"
                    x="0"
                    y="0"
                    width="23.6617"
                    height="18.5058"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_21"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_21"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <Typography>{grossCoins}</Typography>
            </Stack>
            <Typography variant="body2" color="#968C9D">
              Gross Coins
            </Typography>
          </Stack>
          <svg
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3 1L16.4755 3.09917L11.8395 7.5725L8.0395 3.90583L1 10.7075L2.3395 12L8.0395 6.5L11.8395 10.1667L17.8245 4.40083L20 6.5V1H14.3Z"
              fill="#1DBA80"
              stroke="#1DBA80"
            />
          </svg>
          <MoreVert />
        </Stack>
      </Stack>
      <Stack sx={{ height: "450px" }}>
        <img src={Image3} height="450px"></img>
      </Stack>
      <Stack margin={1.5}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" justifyContent="space-between" gap={5}>
            <svg
              width="20"
              height="26"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9424 9.49752C18.8366 9.33253 18.6781 9.25002 18.4667 9.25002H12.2305L18.4139 1.61875C18.5196 1.495 18.5196 1.33002 18.4139 1.20627C18.3082 1.08252 18.1496 1 17.9382 1H9.48235C9.27097 1 9.11243 1.08252 9.00671 1.20627L1.07929 13.5813C0.97357 13.705 0.97357 13.87 1.07929 13.9937C1.18501 14.1175 1.39639 14.2 1.55493 14.2H6.99841L1.07929 25.2138C0.97357 25.3787 1.07929 25.585 1.29067 25.7088C1.3435 25.75 1.44922 25.75 1.55493 25.75C1.71348 25.75 1.87203 25.7088 1.97775 25.6262L18.8896 9.95123C18.9953 9.82748 19.0481 9.6625 18.9424 9.49752ZM3.40462 22.9863L8.26679 13.9113C8.31962 13.7875 8.31962 13.6638 8.21396 13.54C8.10824 13.4575 7.9497 13.375 7.79115 13.375H2.40051L9.79945 1.82502H16.987L10.7507 9.45623C10.645 9.57998 10.645 9.74497 10.7507 9.86872C10.8565 9.99247 11.015 10.075 11.2264 10.075H17.3569L3.40462 22.9863Z"
                fill="#343434"
                stroke="#343434"
                stroke-width="0.5"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9996 11.5144C23.928 8.37465 22.6396 5.4488 20.3721 3.27588C18.1078 1.10625 15.1343 -0.0559207 11.9999 0.00212389C8.86447 -0.0566531 5.892 1.10625 3.62786 3.27588C1.36024 5.4488 0.0719676 8.37465 0.000183112 11.5142L0 11.5241V11.534C0.0164811 14.7336 1.38661 17.7757 3.76539 19.9078V22.8087C3.76539 23.3718 4.15855 23.8621 4.70005 23.9749C4.78026 23.9916 4.86102 24 4.94141 24C5.15933 24 5.37358 23.939 5.5622 23.8213L7.89391 22.3647C9.20892 22.8252 10.5811 23.0585 11.9761 23.0585H11.9937C12.071 23.0599 12.1473 23.0607 12.2244 23.0607C15.2765 23.0605 18.162 21.9023 20.3721 19.7847C22.6396 17.6118 23.928 14.6859 23.9996 11.5464L24 11.5303L23.9996 11.5144ZM19.3981 18.7685C17.4013 20.6819 14.7788 21.7057 12.0138 21.6511L12.0061 21.6509H11.9984C10.701 21.6539 9.42409 21.4281 8.20504 20.9811C7.90362 20.8707 7.57528 20.9044 7.30407 21.0738L5.17306 22.4048V19.7364C5.17306 19.4386 5.04359 19.1554 4.8178 18.9593C2.66775 17.0903 1.42525 14.3851 1.40785 11.5365C1.47341 8.77565 2.60731 6.20338 4.6019 4.29211C6.59849 2.37884 9.22174 1.35546 11.986 1.40966L11.9999 1.40984L12.0138 1.40966C14.7783 1.35601 17.4013 2.37884 19.3981 4.29211C21.3909 6.20173 22.5248 8.77199 22.592 11.5303C22.5248 14.2888 21.3909 16.8589 19.3981 18.7685V18.7685Z"
                fill="#343434"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 11.9936L13.0586 0V7.18433H11.7876C8.63914 7.18433 5.67895 8.41003 3.45254 10.6357C1.22613 12.8613 0 15.8205 0 18.9681V24L2.09984 21.7C4.90873 18.6237 8.89594 16.8441 13.0586 16.8036V23.9874L24 11.9936ZM1.40692 20.3844V18.9681C1.40692 16.1962 2.48669 13.5901 4.44733 11.6301C6.40796 9.67017 9.01481 8.59076 11.7876 8.59076H14.4654V3.62933L22.0961 11.9936L14.4654 20.358V15.3966H13.2031C8.76241 15.3966 4.49202 17.2084 1.40692 20.3844Z"
                fill="#343434"
              />
            </svg>
          </Stack>
          {!timer && (
            <Button
              variant="contained"
              sx={{ backgroundColor: "#4B0082" }}
              onClick={handler}
            >
              Lead +100
            </Button>
          )}
        </Stack>
        <Typography variant="body2">50 interested</Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1}>
            <Avatar src={Image2}></Avatar>
            <Stack>
              <Stack direction="row" alignItems="center">
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8308 7.4942C17.1557 7.4942 20.6617 9.846 20.6617 12.7471C20.6617 15.6482 17.1557 18 12.8308 18C8.50598 18 5 15.6482 5 12.7471C5 9.846 8.50598 7.4942 12.8308 7.4942Z"
                    fill="#FFE28C"
                  />
                  <g filter="url(#filter0_d_0_1)">
                    <path
                      d="M12.8308 5.32972C17.1557 5.32972 20.6617 7.68152 20.6617 10.5826C20.6617 13.4837 17.1557 15.8355 12.8308 15.8355C8.50598 15.8355 5 13.4837 5 10.5826C5 7.68152 8.50598 5.32972 12.8308 5.32972Z"
                      fill="#FFD559"
                    />
                  </g>
                  <g filter="url(#filter1_d_0_1)">
                    <path
                      d="M12.8308 3.16443C17.1557 3.16443 20.6617 5.51623 20.6617 8.41733C20.6617 11.3184 17.1557 13.6702 12.8308 13.6702C8.50598 13.6702 5 11.3184 5 8.41733C5 5.51623 8.50598 3.16443 12.8308 3.16443Z"
                      fill="#FFCB30"
                    />
                    <path
                      d="M12.8308 3.16443C17.1557 3.16443 20.6617 5.51623 20.6617 8.41733C20.6617 11.3184 17.1557 13.6702 12.8308 13.6702C8.50598 13.6702 5 11.3184 5 8.41733C5 5.51623 8.50598 3.16443 12.8308 3.16443Z"
                      fill="#FFCB30"
                    />
                    <path
                      d="M12.8308 3.16443C17.1557 3.16443 20.6617 5.51623 20.6617 8.41733C20.6617 11.3184 17.1557 13.6702 12.8308 13.6702C8.50598 13.6702 5 11.3184 5 8.41733C5 5.51623 8.50598 3.16443 12.8308 3.16443Z"
                      fill="#FFCB30"
                    />
                  </g>
                  <g filter="url(#filter2_d_0_1)">
                    <path
                      d="M12.8308 0.999997C17.1557 0.999997 20.6617 3.3518 20.6617 6.2529C20.6617 9.15399 17.1557 11.5058 12.8308 11.5058C8.50598 11.5058 5 9.15399 5 6.2529C5 3.3518 8.50598 0.999997 12.8308 0.999997Z"
                      fill="#FFBF00"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="0"
                      y="4.32971"
                      width="23.6617"
                      height="18.5058"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="3" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d_0_1"
                      x="0"
                      y="2.16443"
                      width="23.6617"
                      height="18.5058"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="3" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter2_d_0_1"
                      x="0"
                      y="0"
                      width="23.6617"
                      height="18.5058"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="3" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <Typography>
                  <strong>{netCoins}</strong>
                </Typography>
                <svg
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3 1L16.4755 3.09917L11.8395 7.5725L8.0395 3.90583L1 10.7075L2.3395 12L8.0395 6.5L11.8395 10.1667L17.8245 4.40083L20 6.5V1H14.3Z"
                    fill="#1DBA80"
                    stroke="#1DBA80"
                  />
                </svg>
              </Stack>
              <Typography variant="body2" component="div">
                <strong>terry_dias </strong> in Lead
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={1}>
            <Box sx={{ backgroundColor: "#ECE6F0" }}>{hours}</Box>:
            <Typography sx={{ backgroundColor: "#ECE6F0" }}>
              {minutes}
            </Typography>
            :
            <Typography sx={{ backgroundColor: "#ECE6F0" }}>
              {seconds}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" marginTop={1}>
          @alferdo r.. If everything seems under control, you're going fast
          enough. Be Fast, Be Curious..! 😎
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ValuationProcess;
