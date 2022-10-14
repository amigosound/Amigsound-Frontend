import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Link } from "react-router-dom";

function CreatePassword() {
  return (
    <section
      id="password"
      style={{ backgroundImage: `url(${imageUrl("login-bg.png")})` }}
    >
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-6">
            <div className="login-box">
              <div className="main-login">
                <div className="logo-login password-text">
                  <h2>Create a passowrd that is easy to remember</h2>
                </div>
                <div className="signup-text">
                  <div className="input-group signup-box password-box mb-3">
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1 "
                    />
                  </div>
                  <div className="input-group signup-box password-box mt-5">
                    <input
                      type="text"
                      className="form-control login-form"
                      placeholder="New Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1 "
                    />
                  </div>
                </div>

                <div className="terms-text">
                  <p>
                    By clicking continue, you state you have read and agree to
                    Amigo’ Terms of Use and Privacy Policy
                  </p>
                  <div className="continue-btn primary-btn mt-3">
                    <Link to={"/sign-in"}>
                      Continue <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatePassword;
