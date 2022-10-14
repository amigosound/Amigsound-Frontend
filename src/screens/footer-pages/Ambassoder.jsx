import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function Ambassoder() {
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
              <h2 className="welcome-front">Ready to join the Amigo Sound?</h2>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="steps">
                  <h5>STEP 1</h5>
                  <p className="mb-2">
                    Join Amigo Sound Brand Ambassador Program.
                  </p>
                  <a href="#">
                    <span> Start Application</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="steps">
                  <h5>STEP 2</h5>
                  <p className="mb-2">
                    Become a brand ambassador and join the Amigo family. .
                  </p>
                  <a href="#">
                    <span> Start Application</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="steps">
                  <h5>STEP 3</h5>
                  <p className="mb-2">
                    Earn up to commission in Amigo tokens when you invite your
                    friends to join AmigoSound..
                  </p>
                  <a href="#">
                    <span> Share Link</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="benefits">
              <div className="benefits-heading text-center">
                <h2>Brand Ambassador Benefits</h2>
              </div>
              <div className="row">
                <div className="sound-benefits">
                  <div className="col-lg-4">
                    <h5>
                      What are the benefits of using Amigo Sound as a record
                      label?
                    </h5>
                  </div>
                  <div className="col-lg-8">
                    <p className="mb-3">
                      Every record label can use Amigo Sound and tap into
                      millions of listeners. Reach millions of new fans via
                      Amigo Sound.
                    </p>
                  </div>
                </div>
                <div className="sound-benefits">
                  <div className="col-lg-4">
                    <h5>Is Amigo Sound free for Record Labels?</h5>
                  </div>
                  <div className="col-lg-8">
                    <p>
                      Our services totally free (yes, we are serious) with zero
                      strings attached. More than that, though, it’s not just
                      for you right now – it’s free FOREVER.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="program ">
              <div className="row">
                <div className="col-lg-6">
                  <img src={imageUrl("logo-shadowless.png")} alt="logo" />
                </div>
                <div className="col-lg-6">
                  <p>
                    The AmigoSound Brand Ambassador Program is open to everyone:
                    content creators, community leaders, key opinion leaders,
                    and other platforms or organizations can earn commission and
                    special rewards on trades made on our platform. Send us an
                    email at{" "}
                    <a href="#">
                      {" "}
                      officialamigosound@gmail.com to get started.
                    </a>
                  </p>
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

export default Ambassoder;
