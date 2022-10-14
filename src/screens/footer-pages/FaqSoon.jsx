import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function FaqSoon() {
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
        <div className="main-contact ">
          <div className="text-center">
            <div className="welcome-desc ">
              <h3 className="welcome-front ">FAQ’S </h3>
            </div>
          </div>
          <div className="welcome-desc block-display">
            <h3
              className="welcome-front text-center "
              style={{ color: "#A64358" }}
            >
              COMING SOON
            </h3>
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

export default FaqSoon;
