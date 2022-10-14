import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function AmigoReferral() {
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
        <div className="container">
          <div className="welcome-desc footer-">
            {/* <h2 className="welcome-back">AMIGO REFERRAL</h2> */}
            <h3 className="welcome-front text-center">AMIGO REFERRAL</h3>
          </div>
          <div className="welcome-desc block-display">
            <h3 className="welcome-front amigo "> HOW TO REFER FRIENDS</h3>
          </div>
          <div className="main-referal">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="share-box">
                    <h2>01</h2>
                    <img
                      src={imageUrl("share-with-friends.png")}
                      alt="share-with-friends"
                    />
                  </div>
                  <h5 className="mt-2 ">
                    Share your referral link with friends
                  </h5>
                </div>
                <div className="col-lg-4">
                  <div className="share-box">
                    <h2>02</h2>
                    <img
                      src={imageUrl("invite-friends.png")}
                      alt="share-with-friends"
                    />
                  </div>
                  <h5 className="mt-2 ">
                    Invite friends to sign up and earn Amigo tokens Start
                    Earning Now
                  </h5>
                </div>
                <div className="col-lg-4">
                  <div className="share-box">
                    <h2>03</h2>
                    <img src={imageUrl("send-gift.png")} alt="send-gift.png" />
                  </div>
                  <h5 className="mt-2">
                    Send a gift to your friends earn Amigo tokens Start Earning
                    Now
                  </h5>
                </div>
              </div>
            </div>
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

export default AmigoReferral;
