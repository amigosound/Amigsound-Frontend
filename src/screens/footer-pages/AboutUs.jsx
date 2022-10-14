import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      {/* <section id="banner">
        <div className="bg-image">
          <img src={imageUrl("home-bg-final.png")} alt="home-bg-final.png" />
        </div>

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
      <section className="text-home text-for-footer ">
        <Header />

        <div className="main-contact ">
          <div className="text-center">
            <div className="welcome-desc ">
              <h3 className="welcome-front ">ABOUT US</h3>
            </div>
          </div>
          <div className="container">
            <div className="aboutus-text mt-5">
              <p className="mt-3">
                AmigoSound offers a fresh new type of streaming platform which
                returns exciting streaming revenues back to the artist in which
                artists can earn strikingly higher revenue than giant
                competitors such as Spotify.
              </p>
              <p className="mt-3">
                AmigoSound platform will offer 90% percent streaming revenue
                back to the artist with special patron-supported pools while
                demonstrating the power of a scalable modern web3 model to serve
                artists worldwide without gatekeeping or bias.
              </p>
              <p className="mt-3">
                The platform is designed as a bridge that cuts out the
                intermediary through decentralization and community power
                between the music and the listeners. We can say we are the
                Spotify and Youtube killers.{" "}
              </p>
              <p className="mt-3">
                AmigoSound will empower the entire music industry to operate
                without the need for intermediaries. Musicians can stay in
                control of music content, live performances, and merchandise,
                nurturing their careers in one place.
              </p>
              <p className="mt-3">
                We spent a ton of time researching the music industry as well as
                some of the biggest superstars in the business – and how they
                conduct business – when we were building out Amigo Sound.
              </p>
              <p className="mt-3">
                It was important to us that our platform would be radically
                different from anything else out there on the market right now.
                The last thing anyone wants is another carbon copy of a
                mainstream streaming platform, something that doesn’t really
                move the needle.
              </p>
              <p className="mt-3">
                By studying the industry at every level, but especially paying
                attention to superstars and the kind of control they have over
                their careers (the kind of control every artist should have) we
                were able to add some really cool features into Amigo Sound you
                won’t find elsewhere.
              </p>
              <p className="mt-3">
                This is game-changing stuff we are talking about here.
              </p>
              <p className="mt-3">
                Our streaming music platform isn’t just designed to cater to the
                artists and musicians that share and publish their music on this
                platform, though.
              </p>
              <p className="mt-3">
                After all, if fans aren’t happy with the caliber and quality of
                the music that’s pumping through Amigo Sound they aren’t going
                to download the app, they aren’t going to engage with the
                community, and a huge piece of our success puzzle wouldn’t have
                existed at all.
              </p>
              <p className="mt-3">
                That’s why we made sure that all of our streaming features were
                built for fans to get the most out of the music we have to share
                here.
              </p>
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

export default AboutUs;
