import React from "react";
import { Link } from "react-router-dom";
import imageUrl from "../utils/ImageUrl";
function Footer() {
  return (
    <section id="footer-end">
      <div className="container">
        <div className="section-padding">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>Useful Links</h5>
              <div className="useful-links">
                <ul className="links">
                  <li>
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/terms"}>Terms of Services</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>FAQ’s</Link>
                  </li>
                  <li>
                    <Link to={"/amigo-referral"}>Amigo Referral </Link>
                  </li>
                  <li>
                    <Link to={"/amigo-afiliate"}>Amigo Affiliate</Link>
                  </li>
                  <li>
                    <Link to={"/contact-us"}>Contact us</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="text-service">
                <h5>Company</h5>
                <ul className="links">
                  <li>
                    <Link to={"/about-us"}>About us</Link>
                  </li>
                  <li>
                    <Link to={"/amigo-artist"}>Amigo for Artists</Link>
                  </li>
                  <li>
                    <Link to={"/amigo-fans"}>Amigo for Fans</Link>
                  </li>
                  <li>
                    <Link to={"/amigo-label"}>Amigo for Record Labels</Link>
                  </li>
                  <li>
                    <Link to={"/partners"}>Partners</Link>
                  </li>
                  <li>
                    <Link to={"/ambassoder"}>Ambassadors</Link>
                  </li>
                  <li>
                    <Link to={"/investors"}>Investors</Link>
                  </li>
                  <li>
                    <Link to={"/advertise-amigo"}>Advertise on Amigo</Link>
                  </li>
                  <li>
                    <a
                      target={"_blank"}
                      href="mailto:officialamigosound@gmail.com"
                    >
                      {" "}
                      Subscribe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-service">
                <h5>Amigo Sound Token</h5>
                <ul className="links">
                  <li>
                    <Link to={"/token-sale"}>Token Sale</Link>
                  </li>
                  <li>
                    <Link to={"/roadmap"}>Roadmap</Link>
                  </li>
                  <li>
                    <Link to={"/team"}>Team</Link>
                  </li>
                  <li>
                    <Link to={"/white-paper"}>Whitepaper</Link>
                  </li>
                  <li>
                    <Link to={"/faq-soon"}>FAQ’s</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 letter-col">
              <div className="text-letter">
                <h5 className="mb-4">Newsletter</h5>
                <p className="mb-3">No worries, we don‘t spam</p>
              </div>
              <div className="area-text ">
                <div>
                  <input
                    type="email"
                    className="form-control email-input"
                    id="exampleFormControlInput1"
                    placeholder="Your Email"
                  />
                </div>
                <div className="btn-submit">
                  <button className="submit">SUBMIT</button>
                </div>
              </div>

              <div className="icon-list">
                <h5 className="mb-3">Follow Us</h5>
                <div className="icons-group">
                  <a href={"https://twitter.com/Amigo_Sound"} target="_blank">
                    <i className="fa-brands fa-twitter custom-tt"></i>
                  </a>

                  <a href={"https://t.me/AmigoSound"} target="_blank">
                    {/* <i className="fa-brands fa-telegram custom-fb"></i> */}

                    <img
                      className="custom-telegram"
                      src={imageUrl("telegram.png")}
                      alt=""
                    />
                  </a>
                  <a href={"https://discord.gg/7tKHfra3"} target="_blank">
                    <i className="fa-brands fa-discord custom-yb"></i>
                  </a>
                  <a
                    href={"https://medium.com/@officialamigosound"}
                    target="_blank"
                  >
                    <i className="fa-brands fa-medium custom-yb custom-md"></i>
                  </a>
                  <a
                    href={"https://www.instagram.com/amigosound/"}
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram custom-in"></i>
                    {/* <img
                      className=" custom-in"
                      src={imageUrl("reddit.png")}
                      alt=""
                    /> */}
                  </a>
                  <a
                    href={
                      "https://www.facebook.com/people/AmigoSound/100086619361685/"
                    }
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook custom-tt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
