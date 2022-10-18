import "../assets/css/style.css";
import "../assets/css/responsive.css";
// import { Form, Navbar, Nav } from "react-bootstrap";
// import { useTranslation } from "react-i18next";

// import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
// import Onboard from "bnc-onboard";
// import { ethers } from "ethers";
import { useState } from "react";
import imageUrl from "../utils/ImageUrl";
import { Link, useLocation } from "react-router-dom";
// const INFURA_ID = "a3573077-8a08-483c-b4a0-6a4544c59985";
function Header() {
  // const { t, i18n } = useTranslation();
  // const [lang, setLanguage] = useState("en");
  const location = useLocation();
  // const handlechange = (e) => {
  //   setLanguage(e.target.value);
  //   i18n.changeLanguage(e.target.value);
  //   console.log(e.target.value);
  // };
  // const [connect, setConnect] = useState(false);
  // const loadProvider = async () => {
  //   try {
  //     const web3Modal = new web3Modal();
  //     const connection = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(connection);
  //     return provider.getSigner();
  //   } catch (e) {
  //     console.log("loadProvider default: ", e);
  //   }
  // };

  // const {
  //   connector,
  //   library,
  //   account,
  //   chainId,
  //   activate,
  //   deactivate,
  //   active,
  //   errorWeb3Modal,
  //   active: networkActive,
  //   error: networkError,
  //   activate: activateNetwork,
  // } = useWeb3React();
  // let provider;
  // const onboard = Onboard({
  //   dappId: INFURA_ID, //e5dce034-797e-4871-8a93-ef69730dca19
  //   networkId: 3,
  //   darkMode: true,
  //   subscriptions: {
  //     wallet: async (wallet) => {
  //       if (wallet.provider) {
  //         setConnect(true);
  //       } else {
  //         setConnect(false);
  //       }
  //     },
  //   },
  //   walletSelect: {
  //     wallets: [
  //       {
  //         walletName: "metamask",
  //         preferred: true,
  //       },
  //       {
  //         walletName: "walletConnect",
  //         preferred: true,
  //         infuraKey: INFURA_ID,
  //         bridge: "https://bridge.walletconnect.org",
  //       },
  //     ],
  //   },
  // });
  // const connectWalletPressed = async () => {
  //   let wallet = await onboard.walletSelect();
  //   await onboard.walletCheck();
  // };
  // useEffect(async () => {
  //   loadProvider();
  // }, [connect]);
  let pathForshadowlessLogo = [
    // "/trending",
    // "/artist",
    // "/new-artist",
    // "/playlist",
    // "/playlist-inside",
    // "/genres",
    // "/myplaylist",
    // "/genres-inside-1",
    // "/genres-inside-2",
    // "/genres-inside-3",
    // "/complete-track",
    // "/artist-profile",
    // "/artist-inside",
    // "/charts",
    // "/charts-inside",
    "/",
  ];
  let pathMatch = pathForshadowlessLogo.includes(location.pathname);
  console.log(pathMatch);
  return (
    <>
      <div
        className={`nav-bar ${
          location.pathname === "/" ? "home-header" : "custom-border"
        } `}
      >
        <div className="logo logo-bg-color">
          <Link to={"/"}>
            <img
              src={
                pathMatch
                  ? imageUrl("logo-black.png")
                  : imageUrl("logo-shadowless.png")
              }
              alt="logo.png"
            />
          </Link>
        </div>
        <div
          className="main main-bg-color"
          style={{
            backgroundImage: `url(${
              location.pathname === "/artist-inside"
                ? imageUrl("artist-inside.png")
                : location.pathname === "/playlist-inside"
                ? imageUrl("blur-bg.png")
                : location.pathname === "/charts-inside"
                ? imageUrl("blur-bg.png")
                : ""
            })`,
            backgroundPosition: "top",
          }}
        >
          <div className="custom-box">
            <i className="fa fa-magnifying-glass custom-glass"></i>
            <input
              className="custom-input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Search"
            />
          </div>
          <div className="upload">
            <Link to={"#"}>
              {" "}
              <img
                src={imageUrl(
                  "upload-black.png"
                  // `${
                  //   location.pathname === "/"
                  //     ? "upload-black.png"
                  //     : "upload.png"
                  // }`
                )}
                alt="upload.png"
              />
              <p>Upload</p>
            </Link>
          </div>

          <div
            // className={`upload ${location.pathname !== "/" ? "d-none" : ""}`}
            className={`upload`}
          >
            <Link to={"/sign-in"}>
              {" "}
              <img src={imageUrl("signin-black.png")} alt="upload.png" />
              <p>SIGN IN</p>
            </Link>
          </div>
          <div
            className={`${
              location.pathname === "/artist-profile" ||
              location.pathname === "/complete-track"
                ? "d-block"
                : "d-none"
            } connect-btn`}
          >
            <a href="#">
              Connect with <img src={imageUrl("keplr.png")} alt="" />
            </a>
          </div>
          <div
            className={`person ${
              location.pathname === "/" ||
              location.pathname === "/artist-profile" ||
              location.pathname === "/complete-track"
                ? "d-none"
                : ""
            }`}
          >
            {/* <img src={imageUrl("groups.png")} alt="groups.png" /> */}
          </div>
          <div
            className={`profile ${
              location.pathname === "/artist-profile" ||
              location.pathname === "/complete-track"
                ? "d-block"
                : "d-none"
            }`}
          >
            <a href="">
              <img src={imageUrl("profile.png")} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* <Navbar classNameName="mobile-header d-none" expand="lg">
        <Navbar.Brand>
          <div classNameName="logo-section">
            <img src={logo} classNameName="logo" alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classNameName="me-auto align-items-start">
            <li>
              <button classNameName="wallet-btn" onClick={connectWalletPressed}>
                Connect to Wallet
              </button>
            </li>
            <li>
              <button classNameName="guide-btn">
                <img src={guide} />
                <span>Docs</span>
              </button>
            </li>
            <li>
              <Form.Select
                classNameName="mx-3 w-25"
                aria-label="Default select example"
                onChange={handlechange}
                value={lang}
              >
                <option value="en">English</option>
                <option value="chi">Chineese</option>
              </Form.Select>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
}

export default Header;
