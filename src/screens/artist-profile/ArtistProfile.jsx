import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Header } from "../../components";
import imageUrl from "../../utils/ImageUrl";
function ArtistProfile() {
  return (
    <section
      id="artist-profile"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      {/* <div class="bg-image">
        <img src={imageUrl("trending-bg.png")} alt="trending-bg.png" />
      </div> */}
      <Header />
      <Sidebar />
      <div class="profile-list">
        <div class="blank-div"></div>
        <div class="profile-heading mt-5 mx-5">
          <h1>Upload Your Track</h1>
        </div>
      </div>
      <div class="artist-uploadbox mt-5">
        {/* <div class="blank-div"></div> */}
        <div class="container">
          <div class="row mx-3">
            <div class="col-lg-4">
              <div class="image-profile">
                <img
                  src={imageUrl("image-upload.png")}
                  alt="image-upload.png"
                  class="upload-image"
                />
                <a href="#" class="photo-upload">
                  {" "}
                  <img src={imageUrl("camera.png")} alt="camera.png" /> add
                  photo/cover
                </a>
                <a href="#" class="preview mt-5">
                  <img src={imageUrl("play.png")} alt="play.png" /> Preview
                </a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control track-name "
                  placeholder="Track Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <select
                class="form-select custom-select"
                aria-label="Default select example"
              >
                <option selected>Pick a Genre</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle custom-dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NEW TAG
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="form-floating mt-3">
                <textarea
                  class="form-control track-name "
                  placeholder="Descriptiion"
                  id="floatingTextarea"
                ></textarea>
                {/* <label for="floatingTextarea">Comments</label> */}
              </div>
              <div className="input-group-last">
                <div className="remix d-flex align-items-center">
                  <div class="form-check form-switch">
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      This is remix
                    </label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <div className="download-source track-name form-control">
                  <img
                    src={imageUrl("download-source.png")}
                    alt="hiphopp.png"
                  />
                  <input
                    type="text"
                    // class="form-control track-name "
                    placeholder="Download and source files"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="download-source show-advance track-name form-control">
                  <img src={imageUrl("show-advance.png")} alt="hiphopp.png" />
                  <input
                    type="text"
                    placeholder="Show Advance"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artist-btn primary-btn my-4">
        <Link to={"/complete-track"}>
          Continue <i class="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>

      <div class="player">
        <div class="player-line">
          <div class="position-relative">
            <div class="player-line-inner"></div>
          </div>
        </div>

        <div class="song-name">
          <img src={imageUrl("hiphopp.png")} alt="hiphopp.png" />
          <div class="song-text">
            <span>Afsany ft. Talha Younus</span>
            <div class="singer-name">
              <span>Talha Younus</span>
            </div>
          </div>
        </div>

        <div class="select-play">
          <i class="fa-solid fa-backward-step"></i>
          <i class="fa-solid fa-circle-play"></i>
          <i class="fa-solid fa-forward-step"></i>
        </div>
        <div class="adjustments">
          <div class="set-volume">
            <i class="fa-solid fa-volume-high"></i>
            <div class="duration-line"></div>
            <i class="fa-solid fa-volume-xmark"></i>
          </div>
          <div class="functions">
            <img src={imageUrl("shuffle.png")} alt="shuffle.png" />
            <img src={imageUrl("like.png")} alt="like.png" />
            <img src={imageUrl("music-logo.png")} alt="like.png" />
            <img src={imageUrl("nodes.png")} alt="like.png" />
            <img src={imageUrl("downloads.png")} alt="like.png" />
            <img src={imageUrl("playlist.png")} alt="like.png" />
            <div class="play-time">
              <p>01:10/04:20</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistProfile;
