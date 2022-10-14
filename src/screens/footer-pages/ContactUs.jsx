import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function ContactUs() {
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
        <div className="main-contact text-center">
          <div className="welcome-desc ">
            <h3 className="welcome-front">CONTACT</h3>
            <h2 className="mt-3">Get In Touch</h2>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <h2>Any question?</h2>
              <h5>Reach out to us! </h5>
              <div className="contact-service">
                <div className="contact-inside mt-3">
                  <div className="icon-contact">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <p>officialamigosound@gmail.com</p>
                </div>
                <div className="contact-inside mt-3">
                  <div className="icon-contact">
                    <i className="fa-brands fa-telegram"></i>
                  </div>
                  <p>Join us on Telegram</p>
                </div>
                <div className="contact-inside mt-3">
                  <div className="icon-contact">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <p>Follow us on Twitter</p>
                </div>
                <div className="contact-inside mt-3">
                  <div className="icon-contact">
                    <i className="fa-solid fa-tree"></i>
                  </div>
                  <p>LinkTree</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control contact-form"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control contact-form"
                  placeholder="Your Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control contact-form"
                  placeholder="Your Message"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Your Message</label>
              </div>
              <div className="contact-submit">
                <a href="#">Submit</a>
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

export default ContactUs;
