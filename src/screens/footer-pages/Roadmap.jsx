import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header, TimeLine } from "../../components";
import { Link } from "react-router-dom";
function RoadMap() {
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
          <div className="container">
            <div className="roadmap"></div>
            <div className="roadmap-heading">
              <h2>ROADMAP</h2>
            </div>
            <TimeLine />
            {/* <div className="row">
              <div className="col-lg-5">
                <div className="roadmap-heading">
                  <h2>ROADMAP</h2>
                  <a href="#">2022</a>
                  <a href="#">2023</a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="questions">
                      <h2>Q1 2023</h2>
                      <ul>
                        <li>1. Airdrop to the community</li>
                        <li>2. Public sale</li>
                        <li>3. Dex listings</li>
                        <li>4. New Strategic Partnerships</li>
                        <li>5. Growth Hacking and Marketing Campaigns</li>
                        <li>6. 1000-5000 Artists/Musicians Onboarding</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="questions">
                      <h2>Q3 2023</h2>
                      <ul>
                        <li>
                          1. Music Platform Streaming release Desktop and Mobile
                        </li>
                        <li>2. Second Public Sale</li>
                        <li>
                          3. AmigoSound app release for Google Play and Android
                        </li>
                        <li>4. 25.000-50.000 Artists/Musicians Onboarding </li>
                        <li>5. New Strategic Partners</li>
                        <li>
                          6. 50.000-100.000 monthly visits to our music
                          streaming platform
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="questions">
                      <h2>Q4 2023</h2>
                      <ul>
                        <li> 1. AmigoSound music video platform released </li>
                        <li> 2. NFT Platform Launch </li>
                        <li> 3. Launching Promotion Programs for Artists </li>
                        <li> 4. Launching AmigoSound Online Magazine </li>
                        <li> 5. Launching AmigoSound NFT Ticket Selling </li>
                        <li>
                          {" "}
                          6. Reaching over 100.000 artists/musicians onboarding
                          on the platforms
                        </li>
                        <li>
                          {" "}
                          7. 250.000 monthly visits on our music streaming
                          platform{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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

export default RoadMap;
