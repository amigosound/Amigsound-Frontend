import React from "react";
// import imageUrl from "../../utils/ImageUrl";
import { Header } from "../../components";
// import { Link } from "react-router-dom";
function AmigoAfiliate() {
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
          <div className="welcome-desc">
            <h3 className="welcome-front ">
              {" "}
              How Does the AmigoSound Affiliate Program Work?
            </h3>
            <p className="mt-3">
              Recommend AmigoSound. Earn commission in Amigo tokens.
            </p>
          </div>
          <div className="affiliate-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="signup-affiliate mt-5">
                    <h4>
                      {" "}
                      <span> 01 </span>
                    </h4>
                    <h5 className="mt-3"> Sign up to become an affiliate!</h5>
                    <p className="my-3">
                      Submit your application by filling out the form below. Our
                      team will evaluate your application and ensure you meet
                      our affiliate criteria.{" "}
                    </p>
                    <a href="#">Join Now</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="signup-affiliate mt-5">
                    <h4>
                      {" "}
                      <span> 02 </span>
                    </h4>
                    <h5 className="mt-3">
                      {" "}
                      Create and share your affiliate link!
                    </h5>
                    <p className="my-3">
                      Create, manage and track the performance of your affiliate
                      links right from your AmigoSound account.{" "}
                    </p>
                    <a href="#">Join Now</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="signup-affiliate mt-5">
                    <h4>
                      {" "}
                      <span> 03 </span>
                    </h4>
                    <h5 className="mt-3">
                      {" "}
                      Earn up to 50% commissions in Amigo tokens.
                    </h5>
                    <p className="my-3">
                      When users create an account with your affiliate link,
                      you’ll receive a commission in Amigo tokens.{" "}
                    </p>
                    <a href="#">Join Now</a>
                  </div>
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

export default AmigoAfiliate;
