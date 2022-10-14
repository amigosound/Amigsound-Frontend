import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <section
      id="login2"
      style={{ backgroundImage: `url(${imageUrl("login-bg.png")})` }}
    >
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-6">
            <div className="login-box">
              <div className="main-login">
                <div className="logo-login">
                  <img src={imageUrl("logo-shadowless.png")} alt="" />
                  <h2>AMIGO</h2>
                  <span>SOUND</span>
                </div>
                <div className="signup-text">
                  <h3>SIGNUP</h3>
                  <div className="input-group signup-box mb-3">
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="continue-btn primary-btn">
                  <Link to={"/create-password"}>
                    Continue <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="keplr-btn primary-btn my-4">
                  <a href="#">
                    Sign Up With <img src={imageUrl("keplr.png")} alt="" />
                  </a>
                </div>
                <div className="signin-btn primary-btn mt-5">
                  <a href="#">Have an Account? sign in</a>
                </div>
                <div className="forgot-pass mt-4">
                  <a href="#">Forgot your Password?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="login-info">
              <div className="share-music">
                <img src={imageUrl("disc-logo.png")} alt="" />
                <h5>Upload and Share your music</h5>
              </div>
              <div className="share-music">
                <img src={imageUrl("headphones.png")} alt="" />
                <h5>Listen to your favorite artists</h5>
              </div>
              <div className="share-music">
                <img src={imageUrl("speakers.png")} alt="" />
                <h5>Create and publish playlists</h5>
              </div>
              <div className="share-music">
                <img src={imageUrl("disc2.png")} alt="" />
                <h5>
                  <span>...</span> and much more
                  <span> !</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
