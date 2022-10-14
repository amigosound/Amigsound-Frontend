import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function WhitePaper() {
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
      <section class="text-home text-for-footer">
        <Header />
        <div class="main-contact ">
          <div class="text-center">
            <div class="welcome-desc ">
              <h3 class="welcome-front ">WHITEPAPER</h3>
            </div>
          </div>
          <div class="welcome-desc block-display">
            <h3 class="welcome-front text-center comming-soon ">COMING SOON</h3>
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

export default WhitePaper;
