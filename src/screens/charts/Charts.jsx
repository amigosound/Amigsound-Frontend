import React from "react";
import { Sidebar, Header } from "../../components";
import { Link } from "react-router-dom";
import imageUrl from "../../utils/ImageUrl";
import Slider from "react-slick";
import { useSmallSlider } from "../../hooks/useGeneralSLider";
import {
  weeklyChartsData,
  monthlyChartsData,
  weeklyTopArtistChartsData,
  weeklyTopAlbumsChartsData,
} from "../../dummyData";

function Charts() {
  const sliderSetting = useSmallSlider();
  return (
    <section
      className="playlist"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      <Header />
      <Sidebar />
      <div class="songs-list">
        <div class="blank-div"></div>
        <div class="main-content">
          <div class="main-slide">
            <div id="slideshow" class="charts-slider">
              <div class="text-liked">
                <p>Weekly Charts</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <Slider {...sliderSetting}>
                    {weeklyChartsData.map((item, ind) => (
                      <div>
                        <Link to={item.link}>
                          {" "}
                          <img
                            src={imageUrl(item.imageUrl)}
                            alt="pakistan.png"
                          />
                        </Link>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide">
            <div id="slideshow" class="charts-slider2">
              <div class="text-liked">
                <p>Monthly Charts</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <Slider {...sliderSetting}>
                    {monthlyChartsData.map((item, ind) => (
                      <div>
                        <Link to={item.link}>
                          {" "}
                          <img
                            src={imageUrl(item.imageUrl)}
                            alt={item.imageUrl}
                          />
                        </Link>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide">
            <div id="slideshow" class="charts-slider3">
              <div class="text-liked">
                <p>Daily Charts</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <Slider {...sliderSetting}>
                    {weeklyTopArtistChartsData.map((item, ind) => (
                      <div>
                        <Link to={item.link}>
                          {" "}
                          <img
                            src={imageUrl(item.imageUrl)}
                            alt={item.imageUrl}
                          />
                        </Link>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide">
            <div id="slideshow" class="charts-slider4">
              <div class="text-liked">
                <p>Weekly Top Artists</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <Slider {...sliderSetting}>
                    {monthlyChartsData.map((item, ind) => (
                      <div>
                        <Link to={item.link}>
                          {" "}
                          <img
                            src={imageUrl(item.imageUrl)}
                            alt={item.imageUrl}
                          />
                        </Link>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div class="main-slide">
            <div id="slideshow" class="charts-slider5">
              <div class="text-liked">
                <p>Weekly Top Albums</p>
              </div>
              <div class="main-slider">
                <div class="slick img-pos">
                  <Slider {...sliderSetting}>
                    {weeklyTopAlbumsChartsData.map((item, ind) => (
                      <div>
                        <Link to={item.link}>
                          {" "}
                          <img
                            src={imageUrl(item.imageUrl)}
                            alt={item.imageUrl}
                          />
                        </Link>
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;
