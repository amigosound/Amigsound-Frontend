import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
function BlogInside() {
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
        <div className="main-contact ">
          <div className="text-center">
            <div className="welcome-desc ">
              <h2 className="welcome-front ">
                14 merch design tips for musicians
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="blog-image">
              <img src={imageUrl("musicians.webp")} alt="musicians" />
            </div>
            <div className="text-image">
              <p>
                For artists, selling merchandise is no longer just about making
                some extra income, though that is always useful.{" "}
              </p>

              <p>
                {" "}
                Merchandise has become a powerful tool for connecting with your
                fans. And more importantly, allows your fans to physically
                experience your brand and everything your music embodies.{" "}
              </p>

              <p>
                {" "}
                If you’re releasing merch for the first time, knowing where to
                start can be a bit daunting. There's a lot to consider, from
                choosing the right materials to creating a cohesive brand
                design. But don't worry—we're here to help.{" "}
              </p>
            </div>
            <div className="tips">
              <h2 className="mt-5">
                Check out our top tips for designing merchandise for musicians
                below.
              </h2>
            </div>
            <div className="blog-image">
              <img src={imageUrl("top-tips.jpg")} alt="musicians" />
            </div>
            <div className="text-image">
              <h2>Create Your Merch with Print-on-Demand</h2>
              <p>
                Before you start designing, it's a good idea to think about how
                you'll produce, sell, pack, and deliver merch to your customers.{" "}
              </p>

              <p className="mt-3">
                {" "}
                One of the easiest ways to sell merch online is by using a
                print-on-demand service like Printful. Why? Printful takes care
                of all of the production, packaging, and shipping (with no order
                minimums). This means you don't have to worry about printing
                goods yourself. You also don't need to hold heaps of inventory
                because Printful fulfills orders as soon as they are made.{" "}
              </p>

              <p className="mt-3">
                {" "}
                If you’re releasing merch for the first time, knowing where to
                start can be a bit daunting. There's a lot to consider, from
                choosing the right materials to creating a cohesive brand
                design. But don't worry—we're here to help.{" "}
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

export default BlogInside;
