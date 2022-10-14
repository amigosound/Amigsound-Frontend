import React from "react";
import imageUrl from "../../utils/ImageUrl";
import { Link } from "react-router-dom";
import { Header, Footer, Sidebar } from "../../components/index";

function PlayList() {
  return (
    <section
      className="playlist"
      style={{ backgroundImage: `url(${imageUrl("trending-bg.png")})` }}
    >
      {/* <div className="bg-image">
        <img src={imageUrl("trending-bg.png")} alt="music.png" />
      </div> */}
      <Header />
      <Sidebar />
      <div className="songs-list">
        <div className="blank-div"></div>
        <div className="custom-set playlist-custom-set">
          <div className="choices">
            <span className="type-songs">Genre</span>
            <Link to="#" className="active">
              Afro-house
            </Link>
            <a href="#">Spoken words</a>
            <a href="#">Metal</a>
            <a href="#">kwaito</a>
            <a href="#">Bongo Flave</a>
            <a href="#">Sakara</a>
            <a href="#">New Age</a>
            <a href="#">Juji</a>
            <a href="#">Benga</a>
            <a href="#">Traditional</a>
          </div>
          <div className="choices">
            <span className="type-songs">Religious</span>
            <a href="#">Christian </a>
            <a href="#">Islamic</a>
          </div>
          <div className="choices">
            <span className="type-songs">Mood</span>
            <a href="#">Love</a>
            <a href="#">Happy</a>
            <a href="#">Relax</a>
            <a href="#">Motivation</a>
            <a href="#">Mapenzi</a>
            <a href="#">Furaha</a>
            <a href="#">Sad</a>
          </div>
          <div className="choices">
            <span className="type-songs">Vibes</span>
            <a href="#">Party</a>
            <a href="#">Workout</a>
            <a href="#">Study&Work</a>
            <a href="#">Wedding</a>
            <a href="#">Sleep</a>
            <a href="#">Drive</a>
            <a href="#">Yoga</a>
            <a href="#">Trip</a>
            <a href="#">Dance</a>
            <a href="#">Games</a>
          </div>
          <div className="choices">
            <span className="type-songs">Time</span>
            <a href="#">Monday</a>
            <a href="#">Tuesday</a>
            <a href="#">Wednesday</a>
            <a href="#">Thursday</a>
            <a href="#">Friday</a>
          </div>
          <div className="choices">
            <span className="type-songs">Gender</span>
            <a href="#">Male</a>
            <a href="#">Female</a>
          </div>
          <table className="table-artist playlist-table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {Array(3)
                .fill(0)
                .map((_, ind) => (
                  <tr className="space-under">
                    {Array(7)
                      .fill(0)
                      .map((_, ind) => (
                        <td>
                          <div className="artist-title-main">
                            <div className="set-artist">
                              <Link to="/playlist-inside">
                                <img src={imageUrl("akcent.png")} alt="" />
                              </Link>

                              <span>Hip Hop USA</span>
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
    </section>
  );
}

export default PlayList;
