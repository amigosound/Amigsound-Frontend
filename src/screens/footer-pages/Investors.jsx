import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function Partners() {
  return (
    <>
      {/* <section id="banner">
        <div className="bg-image">
          <img src={imageUrl("home-bg-final.png")} alt="home-bg-final.png" />
        </div>

        <Sidebar />
        <div className="main-heading">
          <div className="heading-inside">
            <h1>Amigo Sound</h1>
            <p>The Best Way to Find New Music</p>
            <div className="signup-btn mt-5">
              <a href="#">
                <img src={imageUrl("signup.png")} alt="home-bg-final.png" />{" "}
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-home text-for-footer">
        <Header />
        <div className="main-contact">
          <div className="text-center">
            <div className="welcome-desc">
              <h2 className="welcome-front">INVESTORS</h2>
            </div>
          </div>
          <div className="container">
            <div class="welcome-desc block-display">
              <h3 class="welcome-front text-center comming-soon">
                COMING SOON
              </h3>
            </div>
            {/* <div className="images-partner">
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-polygon.fcda93b264f11eba6bb4.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl(
                    "logo-polygon-studios.681c3da1a1d4f784196b.webp"
                  )}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-hashed.b671278b717b92db0da2.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-kucoin.2eefa3fd7793947b53f1.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-svc.fee8af7ddddf27d3b5ce.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-dweb3.d1b0d5af5e2d6cb3338e.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-gbv.84ea0c343b549a373be6.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-maven.da9382c5161b48ae6303.webp")}
                  alt=""
                />
              </Link>
              <Link to={"#"}>
                <img
                  src={imageUrl("logo-qi.9bdc8658c7586f5a97e3.webp")}
                  alt=""
                />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section className="footer-image">
        <div className="footer-image-inside">
          <img src={imageUrl("footer-sound.png")} alt="footer-sound.png" />
        </div>
      </section> */}
    </>
  );
}

export default Partners;
