import { useState } from "react";
import imageUrl from "../utils/ImageUrl";
import { Header, Sidebar } from "./index";
import { Link } from "react-router-dom";

function HomeBanner() {
  const [open, setOpen] = useState(true);
  console.log("barOpen", open);
  return (
    <>
      <section id="banner">
        <div className="bg-image">
          <img src={imageUrl("home-bg-final.png")} alt="" />
        </div>
        <Header />
        <Sidebar barOpen={open} barClose={() => setOpen(!open)} />

        <div
          className={`main-heading ${
            open ? "justify-content-center mx-4" : ""
          }`}
        >
          <div className="heading-inside">
            <h1>Amigo Sound</h1>
            <p>The Best Way to Find New Music</p>
            <div className="signup-btn mt-5">
              <Link to={"/signup"}>
                <img src={imageUrl("signup.png")} alt="" /> Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
