import React from "react";
import { useState } from "react";
import imageUrl from "../utils/ImageUrl";
import { Header, AddPlayListModal } from "./index";
import { Link, useLocation } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState(false);
  const [modelOpen, setModalOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="position">
        <div
          className={`${open ? "open" : ""} ${
            location.pathname == "/artist-profile" ||
            location.pathname == "/complete-track"
              ? "profile-sidebar"
              : ""
          } custom-container  custom-bar`}
        >
          <i
            className="fa fa-bars bars "
            title="Click me!"
            onClick={() => setOpen(!open)}
          ></i>
          {location.pathname == "/artist-profile" ||
          location.pathname == "/complete-track" ? (
            <ul className="menu artist-profile-menu">
              <li>
                <Link to="#">
                  <img src={imageUrl("home.png")} alt="" />{" "}
                  <span> Discover</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={imageUrl("trending.png")} alt="" />
                  <span> Trending</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={imageUrl("artist.png")} alt="" />
                  <span> Feed</span>
                </Link>
              </li>
              <div className="box">
                <p>
                  Profile <span>29%</span> Complete
                </p>
                <div class="completing-bar "></div>
                <p>Dismiss</p>
              </div>
              <button class="upload-track-btn">
                {" "}
                <img src={imageUrl("upload-music.png")} alt="camera.png" />
                Upload Track
              </button>
            </ul>
          ) : (
            <ul className="menu ">
              <li>
                <Link
                  to="/"
                  className={`${location.pathname === "/" ? "active" : ""}`}
                >
                  <img src={imageUrl("home.png")} alt="" /> <span> home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/trending"
                  className={`${
                    location.pathname === "/trending" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("trending.png")} alt="" />
                  <span> Trending</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/artist"
                  className={`${
                    location.pathname === "/artist" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("artist.png")} alt="" />
                  <span> artist</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/new-artist"
                  className={`${
                    location.pathname === "/new-artist" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("new.png")} alt="" />
                  <span> new</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/playlist"
                  className={`${
                    location.pathname === "/playlist" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("playlist.png")} alt="" />
                  <span> playlist</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/charts"
                  className={`${
                    location.pathname === "/charts" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("charts.png")} alt="" />
                  <span> charts</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/genres"
                  className={`${
                    location.pathname === "/genres" ? "active" : ""
                  }`}
                >
                  <img src={imageUrl("generes.png")} alt="" />
                  <span> genres</span>
                </Link>
              </li>
              <li className="library" onClick={() => setStatus(!status)}>
                <Link to="#">
                  <img src={imageUrl("library.png")} alt="" />
                  <span> library </span>
                  {status ? (
                    <i className={`fa-solid fa-minus `}></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}{" "}
                </Link>
                <ul
                  className={
                    status ? "customdropdown-menu open" : "customdropdown-menu "
                  }
                >
                  <li>
                    <Link to="#" onClick={() => setModalOpen(!modelOpen)}>
                      <img src={imageUrl("music-logo.png")} alt="" />
                      <span>Add Playlist </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-solid fa-heart"></i>
                      <span> Favourites</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myplaylist"
                      className={`${
                        location.pathname === "/myplaylist" ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-music"></i>
                      <span> My playlist</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-solid fa-star fa-plus"></i>
                  <span> Recommended</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <AddPlayListModal open={modelOpen} close={() => setModalOpen(false)} />
    </>
  );
}

export default Sidebar;
