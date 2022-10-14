import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header, FaqsAccordian } from "../../components";
import { Link } from "react-router-dom";
import { amigoArtistData } from "dummyData";
function AmigoArtist() {
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
          <div className="main-contact ">
            <div className="text-center">
              <div className="welcome-desc ">
                <h3 className="welcome-front ">Amigo for Artists </h3>
              </div>
            </div>
            <FaqsAccordian data={amigoArtistData} />
            {/* <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                {" "}
                How do I promote my music?
              </h3>

              <p className="mt-5">
                Marketing your music is essential to get heard. It’s your
                messaging that asks an audience to take action. You want to
                capture the attention of prospective fans with creative
                marketing, but more importantly, get them to press play and
                become actual fans. Your marketing campaigns will depend on your
                goals and likely include promotion, publicity, advertising, and
                more.{" "}
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                {" "}
                How do I get followers/fans?
              </h3>

              <p className="mt-5">
                Getting fans and followers is all about being consistent and
                accessible, in addition to making great music. Fans want to feel
                like they’re a part of your journey, and they want to relate to
                your music and who you are on social media and beyond. This is
                why it’s important to be your most genuine self when you’re
                creating and posting.
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                {" "}
                How do I connect with my fans?
              </h3>

              <p className="mt-5">
                Connecting with your fans can make or break your music career.
                These are the listeners that will stream your music, purchase
                your merch, and attend your shows. You want to make sure your
                connection with them remains strong. You need to ensure, first
                off, that your music is capable of reaching the people you want
                it to connect with. From there, it’s a good idea to be available
                to your fans on social media, whether that’s going live on
                Instagram or replying to tweets. Be authentic in your
                interactions and creative in ways to interact.
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                {" "}
                How do I collaborate with other artists?
              </h3>

              <p className="mt-5">
                Relationships are everything. Collaborating with other artists
                is a great way to expand your reach as an artist and build your
                network. Don’t worry about looking cool—reach out to the artists
                you connect with most and see if they want to work together.
                When you have a real bond with an artist you’re working with,
                the chemistry will shine through in the music.
              </p>
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

export default AmigoArtist;
