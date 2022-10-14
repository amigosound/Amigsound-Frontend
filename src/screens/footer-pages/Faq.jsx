import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header, FaqsAccordian } from "../../components";
import { Link } from "react-router-dom";
import { faqsData } from "dummyData";
function Faq() {
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
          <div className="welcome-desc">
            {/* <h2 className="welcome-back footer-pages-heading">FAQ’S</h2> */}
            <h3 className="welcome-front text-center">FAQ’S</h3>

            <p className="mt-5">
              You've got questions, we've got answers! If you have a question
              that's not listed here, please jump into the Discord and ask in
              the general-chat. We're super active there and happy to help!
            </p>
          </div>
          <div className="container mt-5">
            <FaqsAccordian data={faqsData} />
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

export default Faq;
