import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
import { blogData } from "dummyData";
function Blog() {
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
              <h3 className="welcome-front ">BLOG </h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {blogData.map((item, ind) => (
                <div className="col-lg-4">
                  <div className="card-box1">
                    <div className="card-desc">
                      <Link to={item.link}>
                        <img
                          src={imageUrl(item.imageUrl)}
                          alt={item.imageUrl}
                        />
                        <h2>{item.title}</h2>
                      </Link>

                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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

export default Blog;
