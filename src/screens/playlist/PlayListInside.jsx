import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  Sidebar,
  Header,
  Player,
  CommentList,
  SmallSlider,
  PlaySong,
} from "../../components";
import imageUrl from "../../utils/ImageUrl";
import { useSmallSlider } from "../../hooks/useGeneralSLider";

function PlayListInside() {
  const sliderSetting = useSmallSlider();
  return (
    <section
      className="playlist"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      <Header />
      <Sidebar />
      <div className="songs-list">
        <div className="blank-div"></div>
        <div className="main-content">
          <div className="custom-set">
            <div
              class="image-div"
              style={{ backgroundImage: `url(${imageUrl("blur-bg.png")})` }}
            >
              <div class="choices playlist-desc">
                <a href="#">
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <span>Playlists / Hip Hop USA</span>
              </div>
              <div class="playing-song">
                <div class="song-image">
                  <img src={imageUrl("akcent.png")} alt="" />
                </div>
                <div class="song-info">
                  <p>Hip Hop USA</p>
                  <div class="list-desc">
                    <span>Cover; Akcent &amp; juniffer</span>

                    <span>
                      <img src={imageUrl("logo-song.png")} alt="" />
                      Amigo USA
                    </span>
                    <div class="playlist-function my-2">
                      <a href="#">
                        <i class="fa-solid fa-play"></i>Play all
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-heart"></i>1.741
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-share-nodes"></i>100
                      </a>
                      <a href="#">
                        <i class="fa-solid fa-comment-dots"></i>300
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="artist-image-div">
              <div className="choices playlist-desc">
                <Link to="#">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <Link to="#">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <span>Playlists / Hip Hop Pakistan </span>
              </div>
              <div className="playing-song">
                <div className="song-image">
                  <img src={imageUrl("atif.png")} alt="music.png" />
                </div>

                <div className="song-info">
                  <div className="artist-song-info">
                    <h5>Atif Aslam</h5>
                    <img src={imageUrl("vip.png")} alt="music.png" />
                    <Link to="#">Current #1.741</Link>
                    <Link to="#">All Time #741</Link>
                  </div>
                  <div className="list-desc">
                    <span>Country/Region Pakistan</span>
                    <div className="playlist-function my-2">
                      <Link to="#">
                        <i className="fa-solid fa-play"></i>Play all
                      </Link>
                      <Link to="#">
                        <i className="fa-solid fa-heart"></i>1.741
                      </Link>
                      <Link to="#">
                        <i className="fa-solid fa-share-nodes"></i>100
                      </Link>
                      <Link to="#">
                        <i className="fa-solid fa-comment-dots"></i>300
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="search-title">
              <div className="text-title">
                <p>Hip Hop USA (25)</p>
              </div>

              <div className="input-title">
                <i className="fa fa-magnifying-glass"></i>
                <input
                  className="box-title"
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Search within tracks"
                />
              </div>
            </div>

            <PlaySong />
          </div>
          <div className="main-slide">
            <div id="slideshow" className="playlist-slider-show">
              <div className="text-liked">
                <p>You May Also Like</p>
              </div>
              <div className="main-slider">
                <div className="slick img-pos">
                  {/* <Slider {...sliderSetting}>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>

                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                    <div>
                      <img src={imageUrl("ost.png")} alt="music.png" />
                      <p>Pakistani OSTs</p>
                    </div>
                    <div>
                      <img src={imageUrl("new-song.png")} alt="music.png" />
                      <p>Top song of July</p>
                    </div>
                  </Slider> */}
                  <SmallSlider />
                </div>
              </div>
            </div>
          </div>
          <div className="main-slide">
            <div id="slideshow" className="playlist-slider-show2">
              <div className="text-liked">
                <p>Suggested Artists</p>
              </div>
              <div className="main-slider">
                <div className="slick img-pos">
                  <Slider {...sliderSetting}>
                    {Array(14)
                      .fill(0)
                      .map((_, ind) => (
                        <div>
                          <img src={imageUrl("unknown.png")} alt="music.png" />
                          <p>Jokhay</p>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="comments">
            <div className="text-comment">
              <p>Comments</p>
            </div>
            <div className="form-floating ">
              <textarea
                className="form-control area-form"
                placeholder=""
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Please share your thoughts</label>
            </div>
            <div className="emojis">
              <img src={imageUrl("emoji.png")} alt="music.png" />
              <Link to="#">Comments</Link>
            </div>
          </div>

          <CommentList />
        </div>
      </div>
      <Player img={"hiphopp.png"} />
    </section>
  );
}

export default PlayListInside;

// PlayListInside;
