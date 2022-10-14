import React from "react";
import { Header, Player, Sidebar, SmallSlider } from "../../components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import imageUrl from "../../utils/ImageUrl";
import { useGenralSlider, useSmallSlider } from "../../hooks/useGeneralSLider";

function GenresInside1() {
  const sliderSetting = useSmallSlider();
  return (
    <section
      class="playlist"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      <div class="bg-image">
        {/* <img src={imageUrl("trending-bg.png")} alt="trending-bg.png" /> */}
      </div>
      <Header />
      <Sidebar />
      <div class="songs-list">
        <div class="blank-div"></div>
        <div class="main-content">
          <div
            class="genre-img"
            style={{ backgroundImage: `url(${imageUrl("genre-image.png")})` }}
          >
            <div class="choices playlist-desc ">
              <a href="#">
                <i class="fa-solid fa-arrow-left"></i>
              </a>
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <span>Genre / Christian &amp; Gospel </span>
            </div>
            <div class="genre-heading">
              <h2>CHRISTIAN &amp; GOSPEL</h2>
            </div>

            <div class="genre-seemore">
              <div class="genre-seemore-text">
                <h5>Artist</h5>
                <a href="#"> See More</a>
              </div>
              <div class="main-slide">
                <div id="slideshow" class="genre-slider-show">
                  <div class="main-slider">
                    <div class="slick img-pos">
                      <Slider {...sliderSetting}>
                        {Array(12)
                          .fill(0)
                          .map((item, ind) => (
                            <div>
                              <Link to={"/genres-inside-2"}>
                                <img
                                  src={imageUrl("moses-bliss.png")}
                                  alt="moses-bliss.png"
                                />
                              </Link>
                              <p>Moses Bliss</p>
                              <span>
                                <i class="fa-solid fa-headphones"></i> 44.4k
                              </span>
                            </div>
                          ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide slide2">
            <div id="slideshow" class="genre-slider-show2">
              <div class="text-liked">
                <p>Albums</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <SmallSlider />
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide">
            <div id="slideshow" class="genre-slider-show3">
              <div class="text-liked">
                <p>Playlist</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <SmallSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Player img={"hiphopp.png"} />
    </section>
  );
}

export default GenresInside1;
