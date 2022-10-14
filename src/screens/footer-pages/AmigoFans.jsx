import React from "react";
// import imageUrl from "../../utils/ImageUrl";
import { Header, FaqsAccordian } from "../../components";
// import { Link } from "react-router-dom";
import { amigoForFansData } from "dummyData";
function AmigoFans() {
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
                <h3 className="welcome-front ">AMIGO FOR FANS</h3>
              </div>
            </div>
            <FaqsAccordian data={amigoForFansData} />
            {/* <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">What is Amigo Sound?</h3>

              <p className="mt-5">
                This is the next big thing in the music streaming world. Not
                just for artists looking to build a fan base, but for fans and
                music lovers hunting for new, exciting, and exclusive streams –
                including a bunch not available anywhere else.{" "}
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                Is Amigo Sound free to use?
              </h3>

              <p className="mt-5">
                We wanted to make sure that our users never had to worry about
                paying up a single penny to get their hands on music through
                Amigo Sound. Our services totally free (yes, we are serious)
                with zero strings attached. More than that, though, it’s not
                just for you right now – it’s free FOREVER.
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                {" "}
                Why should I join Amigo Sound Community?
              </h3>

              <p className="mt-5">
                Whether you are an artist looking to share your music with the
                world and build a fan base online or are just a music lover
                looking to uncover new bands, new artists, and new favorite
                songs, now’s your chance to join up with Amigo Sound and make
                that possible. Create your 100% forever free account today,
                download our streaming application (available for Apple and
                Android devices), and take the plunge right now.
              </p>
            </div>
            <div className="welcome-desc block-display">
              <h3 className="welcome-front amigo ">
                Why should I use Amigo Sound?
              </h3>

              <p className="mt-5">
                o kick things off, every single one of the music streams we
                offer on Amigo Sound is available in stunning 100% HD sound. We
                are talking crystal clear streaming at 320 kbps, the highest
                quality sound you can get out of digital music files right now.
                This is as close to listening to music live (but perfectly
                polished) as you’re going to get in streaming today. No other
                platform – especially no other totally free platform – can come
                close to offering this kind of audio quality and fidelity.
                Rediscover your favorite artists with unparalleled richness and
                quality of sound. A new way of listening to your music awaits.
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

export default AmigoFans;
