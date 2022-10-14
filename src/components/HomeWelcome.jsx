import React from "react";
import imageUrl from "../utils/ImageUrl";
function HomeWelcome() {
  return (
    <>
      <section className="text-home ">
        <div className="container">
          <div className="welcome-desc">
            <h2 className="welcome-back">WELCOME</h2>
            <h3 className="welcome-front">WELCOME</h3>
            <h3 className="welcome-front amigo"> TO AMIGO SOUND!</h3>
            <p className="mt-5">
              This is the next big thing in the music streaming world. Not just
              for artists looking <br />
              to build a fan base, but for fans and music lovers hunting for
              new, exciting and
              <br /> exclusive streams – including a bunch not available
              anywhere else.
            </p>
          </div>

          <div className="container-fluid">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="welcome-desc">
                  <h2 className="welcome-back">POWERED BY</h2>
                  <h3 className="welcome-front">POWERED BY</h3>
                  <h3 className="welcome-front amigo"> WEB3 TECH</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="powered">
                  <img src={imageUrl("vector.png")} alt="" />
                </div>
              </div>
            </div>
            <p className="mt-3">
              When we built Amigo Sound we set out to create something
              completely and totally different, a music platform engineered from
              the ground up for serious artists and fans of music that don’t
              want to be spoonfed the same tracks they can hear on their local
              radio.
            </p>

            <p className="mt-3">
              We spent a lot of time creating a platform that could represent
              artists and musicians at every level, from backyard bands just
              getting together to jam all the way up to some of the biggest
              superstars in music today.
            </p>
            <p className="mt-3"> The end result is Amigo Sound!</p>

            <p className="mt-3">
              {" "}
              This platform gives every musician and every artist an opportunity
              to share their music, build a fan base, and connect with their
              listeners and their audience in a way that no other platform
              allows.
            </p>

            <p className="mt-3">
              {" "}
              The backbone of Amigo Sound utilizes Web3 tools and technology.
            </p>

            <p className="mt-3">
              {" "}
              All of this stack gives artists a lot more control over their
              music, how they connect with their fans, how they monetize their
              creations, and so much more.{" "}
            </p>

            <p className="mt-3">
              {" "}
              The technology also produces better sounding streams, more
              consistent sound, and a blazing fast, stable, and secure streaming
              experience for fans, too!
            </p>

            <p className="mt-3">
              {" "}
              We chose to use this technology so that Amigo Sound could be as
              “future proof” as possible. This just might be the last music
              streaming service you ever need to sign up for!
            </p>
          </div>
          <div className="container-fluid mt-5">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="welcome-desc">
                  <h2 className="welcome-back">ENGINEERED</h2>
                  <h3 className="welcome-front">ENGINEERED</h3>
                  <h3 className="welcome-front amigo">
                    WITH INSIGHT FROM SOME OF <br />
                    MUSIC'S BIGGEST STAR
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="powered">
                  <img src={imageUrl("headphone-music.png")} alt="" />
                </div>
              </div>
            </div>
            <p className="mt-3">
              We spent a ton of time researching the music industry as well as
              some of the biggest superstars in the business – and how they
              conduct business – when we were building out Amigo Sound.
            </p>
            <p className="mt-3">
              It was important to us that our platform would be radically
              different than anything else out there on the market right now.
              The last thing anyone wants is another carbon copy of a mainstream
              streaming platform, something that doesn’t really move the needle.
            </p>
            <p className="mt-3">
              {" "}
              By studying the industry at every level, but especially paying
              attention to superstars and the kind of control they have over
              their careers (the kind of control every artist should have) we
              were able to add some really cool features into Amigo Sound you
              won’t find elsewhere.{" "}
            </p>
            <p className="mt-3">
              {" "}
              This is game changing stuff we are talking about here.
            </p>
            {/* <p>
              It was important to us that our platform would be radically
              different than anything else out there on the market right now.
              The last thing anyone wants is another carbon copy of a mainstream
              streaming platform, something that doesn’t really move the needle.
            </p>
            <p> This is game changing stuff we are talking about here.</p> */}
          </div>
          <div className="container-fluid mt-5">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="welcome-desc">
                  <h2 className="welcome-back">REAL MUSIC</h2>
                  <h3 className="welcome-front">REAL MUSIC</h3>
                  <h3 className="welcome-front amigo long-bar">
                    BY REAL ARTISTS FOR <br />
                    REAL FANS
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="powered">
                  <img src={imageUrl("singing.png")} alt="" />
                </div>
              </div>
            </div>
            <p className="mt-3">
              Our streaming music platform isn’t just designed to cater to the
              artists and musicians that share and publish their music on this
              platform, though.
            </p>

            <p className="mt-3">
              After all, if fans aren’t happy with the caliber and quality of
              the music that’s pumping through Amigo Sound they aren’t going to
              download the app, they aren’t going to engage with the community,
              and a huge piece of our success puzzle wouldn’t have existed at
              all.
            </p>
            <p className="mt-3">
              {" "}
              That’s why we made sure that all of our streaming features were
              built for fans to get the most of the music we have to share here.
            </p>

            <p className="mt-3">Always HD Audio Streams</p>
            <p className="mt-3">
              To kick things off, every single one of the music streams we offer
              on Amigo Sound is available in stunning 100% HD sound.
            </p>
            <p className="mt-3">
              We are talking crystal clear streaming at 320 kbps, the highest
              quality sound you can get out of digital music files right now.
              This is as close to listening to music live (but perfectly
              polished) as you’re going to get in streaming today.
            </p>
            <p className="mt-3">
              No other platform – especially no other totally free platform –
              can come close to offering this kind of audio quality and
              fidelity.
            </p>
          </div>

          <div className="container-fluid mt-3">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div>
                  <h3 className="welcome-front amigo-heading">
                    TOTALLY FREE – FOREVER!
                  </h3>
                </div>
              </div>
            </div>
            <p className="mt-3">
              Secondly, we wanted to make sure that our users never had to worry
              about ponying up a single penny to get their hands on music
              through Amigo Sound.
            </p>

            <p className="mt-3">
              Our services totally free (yes, we are serious) with zero strings
              attached.
            </p>
            <p className="mt-3">
              {" "}
              More than that, though, it’s not just for you right now – it’s
              free FOREVER.
            </p>

            <p className="mt-3">
              This gives our fans (and our artists) a lot of confidence knowing
              that the platform is built for the long haul, that it really is
              built around artists and fans connecting with one another, and
              that there’s absolutely zero barrier of entry or risk to try this
              service out for yourself.
            </p>
          </div>
          <div className="container-fluid mt-3">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div>
                  <h3 className="welcome-front amigo-heading">
                    MUSIC AND EXCLUSIVE MEDIA YOU CAN’T FIND ANYWHERE ELSE
                  </h3>
                </div>
              </div>
            </div>
            <p className="mt-3">
              We always work with our artists to try and bring new, exclusive
              music and media to the platform. That’s always going to be a big
              part of what we do here at Amigo Sound.
            </p>

            <p className="mt-3">
              You’ll be able to find, stream, and download exclusive tracks,
              remixes, and other pieces of media on Amigo Sound you literally
              will not be able to find anywhere else.
            </p>
            <p className="mt-3">
              If you have fallen in love with one of our artists or bands, this
              is the platform to follow them on. You never know what kind of new
              and exclusive goodies they’re going to drop unless you are on
              Amigo Sound, too.
            </p>
          </div>

          <div className="container-fluid mt-5 pt-5">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="welcome-desc">
                  <h2 className="welcome-back">A MUSIC</h2>
                  <h3 className="welcome-front">A MUSIC</h3>
                  <h3 className="welcome-front amigo">FIRST COMMUNITY</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="powered">
                  <img src={imageUrl("waves.png")} alt="" />
                </div>
              </div>
            </div>
            <p className="mt-3">
              Everything we do here at Amigo Sound is to produce the biggest,
              the most connected, and the most passionate music community on the
              internet today.
            </p>

            <p className="mt-3">
              This is the number one place for fans – passionate fans – to find
              their favorite artists, to connect with their favorite artists,
              and to find exclusive music, media, interviews, posts, and
              conversations that aren’t available anywhere else.
            </p>
            <p className="mt-3">
              {" "}
              All the tools we provide our artists and our fans are geared
              towards adding even more value to this community.
            </p>

            <p className="mt-3">
              Join today and make an impact on this platform straightaway.
            </p>
          </div>
          <div className="container-fluid mt-5">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="welcome-desc">
                  <h2 className="welcome-back">JOIN</h2>
                  <h3 className="welcome-front">JOIN</h3>
                  <h3 className="welcome-front amigo">AMIGO SOUND NOW!</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="powered">
                  <img src={imageUrl("flame.png")} alt="" />
                </div>
              </div>
            </div>
            <p className="mt-3">
              Whether you are an artist looking to share your music with the
              world and build a fan base online, or are just a music lover
              looking to uncover new bands, new artists, and new favorite songs,
              now’s your chance to join up with Amigo Sound and make that
              possible.
            </p>

            <p className="mt-3">
              Create your 100% forever free account today, download our
              streaming application (available for Apple and Android devices)
              and take the plunge right now.
            </p>
          </div>

          <div className="container-fluid mt-5">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="centertext-started d-flex justify-content-center">
                  <div className="welcome-desc ">
                    <h2 className="welcome-back left-0">LET’S</h2>
                    <h3 className="welcome-front text-center font-weight-normal">
                      LET’S
                    </h3>
                    <h3 className="welcome-front amigo-heading">
                      GET STARTED!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeWelcome;
