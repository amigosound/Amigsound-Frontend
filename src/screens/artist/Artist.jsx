import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
import { Header, Footer, Sidebar } from "../../components/index";
import { artistData } from "../../dummyData";

function Artist() {
  return (
    <section
      className="artist"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      {/* <div className="bg-image">
        <img src={imageUrl("trending-bg.png")} alt="music.png" />
      </div> */}
      <Header />
      <Sidebar />
      <div className="songs-list">
        <div className="blank-div"></div>
        <div className="main-content">
          <div className="custom-set">
            <div className="container">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className="choices">
                    <Link to="#" className="all-button">
                      All
                    </Link>
                    <Link to="#">Christian &amp; Gospel</Link>
                    <Link to="#">R &amp;B/Soul</Link>
                    <Link to="#">Country</Link>
                    <Link to="#">HipHop &amp; Rap</Link>
                    <Link to="#">Afrobeats</Link>
                    <Link to="#">Afropop &amp; Afrofusion</Link>
                    <Link to="#">Reggae</Link>
                    <Link to="#">Highlife</Link>
                    <Link to="#">Jazz</Link>
                  </div>
                ))}

              <div className="choices">
                <Link to="#" className="all-button">
                  Hot
                </Link>
                <Link to="#">A</Link>
                <Link to="#">B</Link>
                <Link to="#">C</Link>
                <Link to="#">D</Link>
                <Link to="#">E</Link>
                <Link to="#">F</Link>
                <Link to="#">G</Link>
                <Link to="#">H</Link>
                <Link to="#">I</Link>
                <Link to="#">J</Link>
                <Link to="#">K</Link>
                <Link to="#">L</Link>
                <Link to="#">M</Link>
                <Link to="#">N</Link>
                <Link to="#">O</Link>
                <Link to="#">P</Link>
                <Link to="#">Q</Link>
                <Link to="#">R</Link>
                <Link to="#">S</Link>
                <Link to="#">T</Link>
                <Link to="#">Y</Link>
                <Link to="#">V</Link>
                <Link to="#">W</Link>
                <Link to="#">X</Link>
                <Link to="#">Y</Link>
                <Link to="#">Z</Link>
              </div>
              <table className="table-artist">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  {Array(2)
                    .fill(0)
                    .map((_, ind) => (
                      <tr className="space-under">
                        {artistData.map((item) => (
                          <td>
                            <div className="artist-title-main">
                              <div className="set-artist">
                                <Link to={item.link}>
                                  <img
                                    src={imageUrl(item.imageUrl)}
                                    alt="music.png"
                                  />
                                </Link>

                                <span>{item.name}</span>
                                <span>
                                  {" "}
                                  <i className="fa-solid fa-headphones"></i>
                                  {item.views}
                                </span>
                              </div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;
