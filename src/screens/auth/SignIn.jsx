import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    // <section
    //   id="password"
    //   style={{ backgroundImage: `url(${imageUrl("login-bg2.png")})` }}
    // >
    //   <div className="container-fluid">
    //     <div className="row py-5">
    //       <div className="col-6">
    //         <div className="login-box">
    //           <div className="main-login">
    //             <div className="logo-login password-text">
    //               <h2>Plz sign in to continue </h2>
    //             </div>
    //             <div className="signup-text">
    //               <div className="input-group signup-box password-box mb-3">
    //                 <input
    //                   type="email"
    //                   required
    //                   className="form-control login-form"
    //                   placeholder="Enter Your Email"
    //                   aria-label="Username"
    //                   aria-describedby="basic-addon1 "
    //                 />
    //               </div>
    //               <div className="input-group signup-box password-box mt-5">
    //                 <input
    //                   type="text"
    //                   className="form-control login-form"
    //                   placeholder="Enter Your Password"
    //                   aria-label="Username"
    //                   aria-describedby="basic-addon1 "
    //                 />
    //               </div>
    //             </div>

    //             <div className="terms-text">
    //               <p>
    //                 By clicking continue, you state you have read and agree to
    //                 Amigo’ Terms of Use and Privacy Policy
    //               </p>
    //               <div className="continue-btn primary-btn mt-3">
    //                 <Link to={"/artist-profile"}>
    //                   Sign in <i className="fa-solid fa-arrow-right-long"></i>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
                  <h3>SIGN IN</h3>
                  <div className="input-group signup-box mb-3">
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group signup-box password-box mb-3">
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1 "
                    />
                  </div>
                </div>
                <div className="continue-btn primary-btn">
                  <Link to={"/artist-profile"}>
                    Continue <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="keplr-btn primary-btn my-4">
                  <a href="#">
                    Sign In with <img src={imageUrl("keplr.png")} alt="" />
                  </a>
                </div>
                <div className="signin-btn primary-btn mt-5">
                  <a href="#">Create an Account? Signup</a>
                </div>
                <div className="forgot-pass">
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

export default SignIn;
